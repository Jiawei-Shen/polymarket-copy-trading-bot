#!/usr/bin/env node

const requiredMajor = 18;
const version = process.versions && process.versions.node ? process.versions.node : '0.0.0';
const major = parseInt(version.split('.')[0], 10);

if (!Number.isFinite(major) || major < requiredMajor) {
    console.error('\n❌ Unsupported Node.js version detected.');
    console.error(`Current version: v${version}`);
    console.error(`Required version: v${requiredMajor}+`);
    console.error('\nPlease upgrade Node.js, then run:');
    console.error('  npm install');
    console.error('  npm run build');
    process.exit(1);
}
