# OAM Docs

Documentation of the whole OAM ecosystem including a showcase of the [OAM Design System](https://github.com/hotosm/oam-design-system).

## Development environment
The development environment is the same for both parts and has the following dependencies:

- Node (v4.2.x) & Npm ([nvm](https://github.com/creationix/nvm) usage is advised)
- Ruby and [Bundler](http://bundler.io/), preferably through something like [rvm](https://rvm.io/)

> The versions mentioned are the ones used during development. It could work with newer ones.

After these basic requirements are met, run the following commands in the website's folder:
```
$ npm install
```

### Getting started
The documentation site resides in the `docs` and it is structured as a jekyll site.

```
$ npm run serve
```
Compiles the sass files, javascript, and launches the server making the site available at `http://localhost:3000/`  
The system will watch files and execute tasks whenever one of them changes.  
The site will automatically refresh since it is bundled with livereload.

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

## Deployment
The .travis.yml file enables the usage of [Travis](http://travis.org) as a test and deployment system.  
In this particular case, Travis will be looking for any changes to the repo and when a change is made to the `master` branch, Travis will build the documentation and deploy it to the `gh-pages` branch.

## Linting
Code follows the `semistandard` code style and should be linted.
- `npm run lint` - will run linter and warn of any errors.

## License
Oam Docs is licensed under **BSD 3-Clause License**, see the [LICENSE](LICENSE) file for more details.
