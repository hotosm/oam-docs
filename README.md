# OpenAerialMap Design System

Style guide and UI components library that aims to standardize the look and feel across all OAM-related applications, while defining coding best practices and conventions.

Work in progress.

## Development environment
To set up the development environment for this website, you'll need to install the following on your system:

- [Node and npm](http://nodejs.org/)
- Gulp ( `$ npm install -g gulp` )

After these basic requirements are met, run the following commands in the website's folder:
```sh
$ npm install
```

### Getting started

```sh
$ gulp collecticons
$ gulp serve
```
Compiles the Sass files and JavaScript code, and launches the server making the site available at `http://localhost:3000/`.
The system will watch files and execute necessary build tasks whenever one of them changes.
The site will automatically refresh when changes are detected.
NOTE: To save time collecticons is not compiled by the serve command.

### Other commands
Compile the Sass files, JavaScript, collecticons... Use this instead of `gulp serve` if you don't want to watch for file changes.
```sh
$ gulp
```
