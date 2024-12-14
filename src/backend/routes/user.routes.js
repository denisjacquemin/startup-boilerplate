const express = require('express');
const { body } = require('express-validator');
const { protect, authorize } = require('../middleware/auth.middleware');
const User = require('../models/user.model');
const { AppError } = require('../middleware/errorHandler');

const router = express.Router();

// Protect all routes after this middleware
router.use(protect);

// Validation middleware
const validateUserUpdate = [
    body('username').optional().trim().isLength({ min: 3 }).escape(),
    body('email').optional().isEmail().normalizeEmail(),
    body('password').optional().isLength({ min: 8 })
];

// Get current user
router.get('/me', async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        res.json({
            success: true,
            data: user
        });
    } catch (error) {
        next(error);
    }
});

// Update current user
router.put('/me', validateUserUpdate, async (req, res, next) => {
    try {
        const { password, ...updateData } = req.body;

        // Check if email is being updated and is unique
        if (updateData.email) {
            const existingUser = await User.findOne({ email: updateData.email });
            if (existingUser && existingUser._id.toString() !== req.user.id) {
                throw new AppError('Email already in use', 400);
            }
        }

        // Check if username is being updated and is unique
        if (updateData.username) {
            const existingUser = await User.findOne({ username: updateData.username });
            if (existingUser && existingUser._id.toString() !== req.user.id) {
                throw new AppError('Username already in use', 400);
            }
        }

        const user = await User.findByIdAndUpdate(
            req.user.id,
            updateData,
            { new: true, runValidators: true }
        );

        res.json({
            success: true,
            data: user
        });
    } catch (error) {
        next(error);
    }
});

// Change password
router.put('/change-password', 
    [body('currentPassword').exists(), body('newPassword').isLength({ min: 8 })],
    async (req, res, next) => {
        try {
            const { currentPassword, newPassword } = req.body;

            const user = await User.findById(req.user.id).select('+password');
            if (!user) {
                throw new AppError('User not found', 404);
            }

            const isMatch = await user.comparePassword(currentPassword);
            if (!isMatch) {
                throw new AppError('Current password is incorrect', 401);
            }

            user.password = newPassword;
            await user.save();

            res.json({
                success: true,
                message: 'Password updated successfully'
            });
        } catch (error) {
            next(error);
        }
    }
);

// Admin only routes
router.use(authorize('admin'));

// Get all users
router.get('/', async (req, res, next) => {
    try {
        const users = await User.find();
        res.json({
            success: true,
            count: users.length,
            data: users
        });
    } catch (error) {
        next(error);
    }
});

// Get single user
router.get('/:id', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            throw new AppError('User not found', 404);
        }

        res.json({
            success: true,
            data: user
        });
    } catch (error) {
        next(error);
    }
});

// Update user (admin)
router.put('/:id', validateUserUpdate, async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!user) {
            throw new AppError('User not found', 404);
        }

        res.json({
            success: true,
            data: user
        });
    } catch (error) {
        next(error);
    }
});

// Delete user
router.delete('/:id', async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            throw new AppError('User not found', 404);
        }

        res.json({
            success: true,
            message: 'User deleted successfully'
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router; 