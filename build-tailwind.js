const tailwindConfig = require('./tailwind.config.js');
const resolvedConfig = require('tailwindcss/resolveConfig')(tailwindConfig);

const fs = require('fs');
const path = require('path');

fs.writeFileSync(
  path.join(__dirname, `./tailwind-theme.json`),
  JSON.stringify(resolvedConfig.theme, null, 2)
);
