#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

console.log('==========================================');
console.log('Venture Foresight - Build Script');
console.log('==========================================\n');

// Copy static pages to root
console.log('Copying static pages...\n');
const staticDirs = ['problem-solution-fit', 'customer-persona', 'futures-wheel', 'scenario-planning', 'cone-of-plausibility', 'futures-triangle', 'future-readiness', 'causal-layered-analysis'];

staticDirs.forEach(dir => {
  const src = path.join(ROOT, 'static', dir);
  const dest = path.join(ROOT, dir);

  if (fs.existsSync(src)) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    fs.cpSync(src, dest, { recursive: true });
    console.log(`  Copied ${dir}/`);
  } else {
    console.warn(`  Warning: ${dir}/ source not found in static/`);
  }
});

console.log('\n==========================================');
console.log('Build complete!');
console.log('==========================================\n');

console.log('Output directories:');
console.log('  Static pages -> /{page-name}/');
console.log('\nTo preview locally: npx serve .');
