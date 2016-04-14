# OAM Design System Development

Besides the design system per se, this repo also contains the documentation site.  
The site uses jekyll for template management, is built by travis, and deployed to [gh-pages]().

The following instructions are divided in two sections:
- Design system development
- Documentation development

The main purpose of this system is to modularize the assets, therefore is important to maintain a clear separation between the design-system and the docs site. The docs depends on the design-system but not the other way around.

## Development environment
The development environment is the same for both parts and has the following dependencies:

- Node (v4.2.x) & Npm ([nvm](https://github.com/creationix/nvm) usage is advised)
- Ruby and [Bundler](http://bundler.io/), preferably through something like [rvm](https://rvm.io/)

> The versions mentioned are the ones used during development. It could work with newer ones.

After these basic requirements are met, run the following commands in the website's folder:
```
$ npm install
$ bundle install
```

### Design system development
All assets that belong to the design system go in the root's `assets` folder and are separated by type:
```
assets/
  graphics/
    layout/
    meta/
  icons/
  styles/
    oam-design-system/
  scripts/
```
These assets will then be available to be used after installing the module.

**assets/styles**  
All the individual style files (like _buttons.scss, _forms.scss, ...) must go inside the `oam-design-system` folder and then be included in the main file (`_oam-design-system.scss`)

**assets/scripts**  
The scripts files should all be modules and linked in `index.js`.  
These files can then be liked in the doc's files and used.

**assets/icons**  
Svg icons to be compiled into a webfont. The resulting compiled file must be committed with the rest of the styles.  
To manually compile the `oam-design-system` icons run:
```
$ npm run oam-icons
```

### Documentation development
The documentation site resides in the `docs` and it is structured as a jekyll site.

```
$ npm run serve
```
Compiles the sass files, javascript, and launches the server making the site available at `http://localhost:3000/`  
The system will watch files and execute tasks whenever one of them changes.  
The site will automatically refresh since it is bundled with livereload.


The `oam-design-system` styles are included with:
```scss
@import "oam-design-system";
```

And the scripts modules are collectively included through:
```js
import { componentName } from '../../../assets/scripts';
// The will be the equivalent of doing:
// import { componentName } from 'oam-design-system'
```

or individually:
```js
import componentName from '../../../assets/scripts/componentName';
```

**Important:** If you need to install new node modules, install them as **dependencies** if they are for the `oam-design-system` and as **devDependencies** if they're for the docs.

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
It will also publish new versions to the npm registry.

## Linting
Code follows the `semistandard` code style and should be linted.
- `npm run lint` - will run linter and warn of any errors.
