#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const componentName = process.argv[2];
const directory = process.argv[3] || "components";

const componentPath = path.join(
  process.cwd(),
  "src",
  directory,
  componentName
);

const jsxContent = `
import React from 'react';
import styles from './${componentName}.module.css';

const ${componentName} = () => {
  return (
    <div className={styles.container}>
      <h1>${componentName} Component</h1>
    </div>
  );
};

export default ${componentName};
`;

const cssContent = `
.container {
  /* Your styles here */
}
`;

const indexFilePath = path.join(componentPath, "index.js");

fs.mkdirSync(componentPath, { recursive: true });

fs.writeFileSync(
  path.join(componentPath, `${componentName}.jsx`),
  jsxContent.trim()
);
fs.writeFileSync(
  path.join(componentPath, `${componentName}.module.css`),
  cssContent.trim()
);

fs.appendFileSync(
  indexFilePath,
  `
export { default as ${componentName} } from './${componentName}';
`
);

// Colored output
const successMessage = chalk.green(
  `${componentName} component generated successfully! 🎉`
);
console.log(successMessage);
