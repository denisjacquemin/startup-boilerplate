#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync } = require('child_process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function setup() {
    console.log('\n🚀 Welcome to the project setup wizard!\n');

    // Get project information
    const projectName = await question('Project name: ');
    const projectDescription = await question('Project description: ');
    const databaseName = projectName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const authorName = await question('Author name: ');
    const authorEmail = await question('Author email: ');

    console.log('\nUpdating project files...');

    // Update package.json
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    packageJson.name = projectName;
    packageJson.description = projectDescription;
    packageJson.author = `${authorName} <${authorEmail}>`;
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

    // Update .env.example and create .env
    const envContent = fs.readFileSync('.env.example', 'utf8')
        .replace('startup-boilerplate', databaseName)
        .replace('your_jwt_secret_here', `${projectName}_jwt_${Date.now()}`)
        .replace('your_refresh_token_secret_here', `${projectName}_refresh_${Date.now()}`);
    
    fs.writeFileSync('.env', envContent);

    // Update HTML title
    const indexHtmlPath = 'src/frontend/index.html';
    let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
    indexHtml = indexHtml.replace('<title>Modern Full-Stack App</title>', `<title>${projectName}</title>`);
    indexHtml = indexHtml.replace('Modern App</h1>', `${projectName}</h1>`);
    fs.writeFileSync(indexHtmlPath, indexHtml);

    // Update README.md
    const readmeContent = `# ${projectName}

${projectDescription}

This project was bootstrapped with [Startup Boilerplate](https://github.com/your-username/startup-boilerplate).

## Getting Started

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

[List your project-specific features here]

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
`;
    fs.writeFileSync('README.md', readmeContent);

    // Initialize new git repository
    try {
        fs.rmSync('.git', { recursive: true, force: true });
        execSync('git init');
        execSync('git add .');
        execSync('git commit -m "Initial commit: Project setup"');
    } catch (error) {
        console.error('Error initializing Git repository:', error.message);
    }

    console.log('\n✅ Project setup complete!');
    console.log('\nNext steps:');
    console.log('1. Review and update the generated files');
    console.log('2. Run npm install to install dependencies');
    console.log('3. Start developing with npm run dev');
    console.log('\nHappy coding! 🎉\n');

    rl.close();
}

setup().catch(console.error); 