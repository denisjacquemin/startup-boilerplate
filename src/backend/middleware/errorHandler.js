const { logger } = require('../utils/logger');

class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    // Log error
    logger.error('Error:', {
        message: err.message,
        stack: err.stack,
        statusCode: err.statusCode
    });

    if (process.env.NODE_ENV === 'development') {
        res.status(err.statusCode).json({
            success: false,
            error: err,
            message: err.message,
            stack: err.stack
        });
    } else {
        // Production error response
        if (err.isOperational) {
            res.status(err.statusCode).json({
                success: false,
                message: err.message
            });
        } else {
            // Programming or unknown errors
            res.status(500).json({
                success: false,
                message: 'Something went wrong'
            });
        }
    }
};

const handleMongooseError = (err) => {
    if (err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map(val => val.message);
        return new AppError(messages.join('. '), 400);
    }

    if (err.code === 11000) {
        const field = Object.keys(err.keyValue)[0];
        return new AppError(`Duplicate field value: ${field}. Please use another value`, 400);
    }

    return err;
};

module.exports = { errorHandler, AppError, handleMongooseError }; 