<h1 align="center">Documentation page</h1>

<div align="center">
  <h3>
  <a href="https://docs.openaerialmap.org/ecosystem/getting-started/">Ecosystem</a>
  <span> | </span>
  <a href="https://github.com/hotosm/oam-design-system">OAM Design System</a>
  </h3>
</div>

Documentation of the whole OAM ecosystem including a showcase of the [OAM Design System](https://github.com/hotosm/oam-design-system).

## Installation and Usage

The steps below will walk you through setting up your own instance of the oam-docs.

### Install Project Dependencies
To set up the development environment for this website, you'll need to install the following on your system:

- [Node](http://nodejs.org/) v4 (To manage multiple node versions we recommend [nvm](https://github.com/creationix/nvm))
- Ruby and [Bundler](http://bundler.io/), preferably through something like [rvm](https://rvm.io/)

### Install Application Dependencies

If you use [`nvm`](https://github.com/creationix/nvm), activate the desired Node version:

```
nvm install
```

Install Node modules:

```
npm install
```

### Usage

#### Config files (Jekyll)
The oam-docs is a jekyll app, and the 3 config files are located in the project root.
  - `_config-dev.yml`
  - `_config-stage.yml`
  - `_config.yml`

The `_config.yml` file serves as base and the other 2 will override it as needed:
  - `_config-stage.yml` will be loaded whenever the env variable `DS_ENV` is set to staging.
  - `_config-dev.yml` will be loaded whenever the env variable `DS_ENV` is set to development.

The following options must be set: (The used file will depend on the context)
  - `baseurl` - The base url for the app. This is the only important configuration to set. (no trailing slash). When doing local development this should be set to `http://localhost:3000`. (3000 is the default port)

Example:
``` 
baseurl: https://docs.openaerialmap.org
```

#### Starting the app

```
npm run serve
```
Compiles the sass files, javascript, and launches the server making the site available at `http://localhost:3000/`
The system will watch files and execute tasks whenever one of them changes.
The site will automatically refresh since it is bundled with livereload.
Running this command will load `_config-dev.yml`.

#### Adding new pages
Any top level page added should be directly inside `docs/`, its name prefixed with a number to set order, and have the following front matter (example):
```
layout: base
id: Brand
permalink: brand/
```
All the top level pages will show up in the main menu. The `id` is used for the link text.

The sublevel pages should go into an appropriately named directory, its name prefixed with a number related to the parent and have the following front matter (example):
```
layout: base
id: Logos
parent: Brand
permalink: brand/logos/
```
All the sub level pages will show up side navigation of all the pages with the same parent. The `id` is used for the link text.

If you don't want the parent page to have an output, set the `permalink` to one of the subpages (example):
```
layout: base
id: Brand
permalink: brand/logos/
```
**Example file structure:**
```
/
  10_index.html
  20_brand.html
  brand/
    21_logos.html
```

# Deployment
To prepare the app for deployment run:

```
npm run build
```
This will package the app and place all the contents in the `dist` directory.
The app can then be run by any web server.

### Travis deployment
The .travis.yml file enables the usage of [Travis](http://travis.org) as a test and deployment system.  
In this particular case, Travis will be looking for any changes to the repo and when a change is made to the `master` branch, Travis will build the documentation and deploy it to the `gh-pages` branch.

## Linting
- `npm run lint` - will run linter and warn of any errors.

## License
Oam Docs is licensed under **BSD 3-Clause License**, see the [LICENSE](LICENSE) file for more details.
