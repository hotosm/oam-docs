---
layout: article
id: Getting Started
parent: Design System

permalink: design-system/getting-started/

title: Getting Started
introduction: An introduction to OAM Design System, including how to download and use it, some basic templates and examples.
---

Style guide and UI components library that aims to standardize the look and feel across all OAM-related applications, while defining coding best practices and conventions.

**This is still under development. Breaking changes may be introduced at any moment. Use at your own risk!**

---

## Installation

Install it as an `npm` module: (not available as an npm module yet)
{% highlight sh %}
npm install https://github.com/hotosm/oam-design-system
{% endhighlight %}

**Note:**
This design system makes some assumptions which are described below for each of the elements.
Check the build system of [OAM docs](https://github.com/hotosm/oam-docs/blob/master/gulpfile.js), a project that uses the `oam-design-system`.

## Overview

The shared assets are all in the `assets` directory. It is organized as follows:

### Scripts
Utility libraries and shared components.

#### Usage
Use as any node module:
{% highlight js %}
import { Dropdown, hello } from 'oam-design-system';
{% endhighlight %}
If you want to minimize bundle size you can also include the components directly.  
Bindings exported from `oam-design-system` are also available as `oam-design-system/assets/scripts/<name>`

### Styles
Requires [Bourbon](https://github.com/lacroixdesign/node-bourbon) and [Jeet](https://github.com/mojotech/jeet).

#### Installation 
Add the module path to the `includePaths` of gulp-sass. Should look something like:
{% highlight js %}
.pipe($.sass({
  outputStyle: 'expanded',
  precision: 10,
  includePaths: require('node-bourbon').with('node_modules/jeet/scss', require('oam-design-system/gulp-addons').scssPath)
}))
{% endhighlight %}

#### Usage 
Now you can include it in the main scss file:
{% highlight scss %}
// Bourbon is a dependency
@import "bourbon";

@import "jeet/index";

@import "oam-design-system";
{% endhighlight %}

### Icons
The `oam-design-system` includes svg icons that are compiled into a webfont and included in the styles.  
To use them check the `_oam-ds-icons.scss` for the class names.

### Graphics
Graphics that are to be shared among projects.

#### Installation 
Add the `graphicsMiddleware` to browserSync. This is only to aid development.  
Should look something like:
{% highlight js %}
browserSync({
  port: 3000,
  server: {
    baseDir: ['.tmp', '_site'],
    routes: {
      '/node_modules': './node_modules'
    },
    middleware: require('oam-design-system/gulp-addons').graphicsMiddleware(fs) // <<< This line
  }
});
{% endhighlight %}
*Basically every time there's a request to a path like `/assets/graphics/**`, browserSync will check in the `oam-design-system` folder first. If it doesn't find anything it will look in the normal project's asset folder.*

You also need to ensure that the images are copied over on build.
This ensures that the graphics are copied over when building the project.
{% highlight js %}
gulp.task('images', function () {
  return gulp.src(['_site/assets/graphics/**/*', require('oam-design-system/gulp-addons').graphicsPath + '/**/*'])
    .pipe($.cache($.imagemin({
{% endhighlight %}

#### Usage
Just include the images using the path `assets/graphics/[graphic-type]/[graphic-name]`.  
All available images can be found [here](assets/graphics/).
