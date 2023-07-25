# My Component Generator

A React CLI tool to generate new components effortlessly.

![npm](https://img.shields.io/npm/v/my-component-generator?color=blue) ![license](https://img.shields.io/npm/l/my-component-generator)

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

My Component Generator is a command-line tool that simplifies the process of creating new React components in your project. It provides an easy-to-use interface that lets you choose the file type (JSX or TSX) and the preferred styling option (CSS Module, Styled Components, CSS, or SCSS) for the component.

With this tool, you can save time and effort when creating new components, as it automatically generates the component file and the associated styling file based on your preferences.

## Installation

To use My Component Generator, you need to have Node.js installed on your system. If you haven't installed Node.js, you can download it from [here](https://nodejs.org/).

Once you have Node.js installed, you can install My Component Generator globally using npm:

```bash
npm install -g my-component-generator
```

Alternatively, you can use yarn to install the package:

```bash

yarn global add my-component-generator
```

## Usage

configure in your package.json to run components

```bash
"new-component": "my-component-generator"
```

To create a new component, open your terminal or command prompt and run the following command:

```bash
npm run new-component <component-name> [directory]
```

Replace `<component-name>` with the desired name for your new component, and `[directory]` (optional) with the path where you want to create the component. By default, the component will be created in the "components" directory.

Follow the prompts to select the file type (JSX or TSX) and the styling option (CSS Module, Styled Components, CSS, or SCSS) for the component. The tool will generate the component file and the associated styling file based on your choices.

### Examples

To create a new component named "Button" in the default "components" directory:

```bash
npm run new-component Button
```

To create a new component named "Header" in a custom directory "src/components/layout":

```bash
npm run new-component Header src/components/layout
```

### Using npm script

Alternatively, you can use the following npm script defined in `package.json`:

```bash
npm run new-component -- <component-name> [directory]
```

Replace `<component-name>` and `[directory]` as mentioned above.

## Configuration

You can configure My Component Generator by modifying the `index.js`, `componentGenerator.js`, and `stylingGenerator.js` files in the root of the project. These files contain the logic and templates for component and styling file generation.

Additionally, you can customize the package details in `package.json`, such as the name, version, description, author, and dependencies.

## Contributing

We welcome contributions from the community! If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request on our [GitHub repository](https://github.com/imranhrafi/component-generator).

Before contributing, please read our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using My Component Generator! We hope it makes your React development process smoother and more efficient. If you have any feedback or questions, please don't hesitate to reach out. Happy coding! 🚀
