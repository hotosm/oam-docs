---
layout: docs_page
id: Components
parent: Design

permalink: design/components/

title: Components
introduction: This is a page introduction. Morbi eget mattis ipsum. Donec massa nibh, bibendum at sit amet ipsum.
---

## Buttons

### Colors

<div class="docs-example">
  <button class="button button--base-light" type="button"><span>Base light</span></button>
  <button class="button button--base-dark" type="button"><span>Base dark</span></button>
  <button class="button button--primary" type="button"><span>Primary</span></button>
  <button class="button button--secondary" type="button"><span>Secondary</span></button>

  <div class="docs-example__inset">
{% highlight html %}
<button class="button button--base-light" type="button"><span>Base light</span></button>
<button class="button button--base-dark" type="button"><span>Base dark</span></button>
<button class="button button--primary" type="button"><span>Primary</span></button>
<button class="button button--secondary" type="button"><span>Secondary</span></button>
{% endhighlight %}                  
  </div>
</div>

### Sizes

<div class="docs-example">
  <button class="button button--base-light button--small" type="button"><span>Small</span></button>
  <button class="button button--base-light button--medium" type="button"><span>Medium</span></button>
  <button class="button button--base-light button--large" type="button"><span>Large</span></button>

  <div class="docs-example__inset">
{% highlight html %}
<button class="button button--base-light button--small" type="button"><span>Small</span></button>
<button class="button button--base-light button--medium" type="button"><span>Medium</span></button>
<button class="button button--base-light button--large" type="button"><span>Large</span></button>
{% endhighlight %}                  
  </div>
</div>

### States

<div class="docs-example">
  <button class="button button--base-light button--active" type="button"><span>Active</span></button>
  <button class="button button--base-light disabled" type="button"><span>Disabled</span></button>

  <div class="docs-example__inset">
{% highlight html %}
<button class="button button--base-light button--active" type="button"><span>Active</span></button>
<button class="button button--base-light disabled" type="button"><span>Disabled</span></button>
{% endhighlight %}                  
  </div>
</div>

### Iconified

<div class="docs-example">
  <button class="button button--base-light button--text-hidden" type="button"><i class="meh oam-ds-icon-clock"></i><span>Hidden text</span></button>
  <button class="button button--base-light" type="button"><i class="oam-ds-icon-download"></i> <span>Visible text</span></button>
  <button class="button button--base-light button--example-icon" type="button"><span>Pseudo-element</span></button>

  <div class="docs-example__inset">
{% highlight html %}
<button class="button button--base-light button--text-hidden" type="button"><i class="oam-ds-icon-clock"></i><span>Hidden text</span></button>
<button class="button button--base-light" type="button"><i class="oam-ds-icon-clock"></i> <span>Visible text</span></button>
<button class="button button--base-light button--icon" type="button"></i><span>Pseudo-element</span></button>
{% endhighlight %}                  
  </div>
</div>

### Groups

<div class="docs-example">

  <div class="button-group button-group--horizontal" role="group" aria-label="...">
    <button class="button button--base-light button--active" type="button"><span>Left</span></button>
    <button class="button button--base-light" type="button"><span>Middle</span></button>
    <button class="button button--base-light" type="button"><span>Right</span></button>
  </div>

  <div class="button-group button-group--large button-group--horizontal">
    <label class="button button--base-light button--active" for="option-1">
      <input type="checkbox" id="option-1" checked=""> CB1 (pre-checked)
    </label>
    <label class="button button--base-light" for="option-2">
      <input type="checkbox" id="option-2"> CB2
    </label>
    <label class="button button--base-light" for="option-3">
      <input type="checkbox" id="option-3"> CB3
    </label>
  </div>

  <div class="button-group button-group--vertical" role="group" aria-label="...">
    <button class="button button--base-light" type="button"><span>Top</span></button>
    <button class="button button--base-light" type="button"><span>Middle</span></button>
    <button class="button button--base-light" type="button"><span>Bottom</span></button>
  </div>

  <div class="docs-example__inset">
{% highlight html %}
<div class="button-group button-group--horizontal" role="group" aria-label="...">
  <button class="button button--base-light button--active" type="button"><span>Left</span></button>
  <button class="button button--base-light" type="button"><span>Middle</span></button>
  <button class="button button--base-light" type="button"><span>Right</span></button>
</div>

<div class="button-group button-group--large button-group--horizontal">
  <label class="button button--base-light button--active" for="option-1">
    <input type="checkbox" id="option-1" checked=""> CB1 (pre-checked)
  </label>
  <label class="button button--base-light" for="option-2">
    <input type="checkbox" id="option-2"> CB2
  </label>
  <label class="button button--base-light" for="option-3">
    <input type="checkbox" id="option-3"> CB3
  </label>
</div>

<div class="button-group button-group--vertical" role="group" aria-label="...">
  <button class="button button--base-light" type="button"><span>Top</span></button>
  <button class="button button--base-light" type="button"><span>Middle</span></button>
  <button class="button button--base-light" type="button"><span>Bottom</span></button>
</div>
{% endhighlight %}                  
  </div>
</div>

## Drops

### Examples

<div class="docs-example">
  <div class="drop drop--down drop--align-left drop--open">
    <button class="button button--base-light drop__toggle" type="button"><span>Toggle</span></button>
    <div class="drop__content">
      <ul class="drop__menu" role="menu">
        <li><a href="#" title="This is Item 1a" class="drop__menu-item">Item 1a</a></li>
        <li><a href="#" title="This is Item 2a" class="drop__menu-item">Item 2a</a></li>
      </ul>
      <ul class="drop__menu" role="menu">
        <li><a href="#" title="This is Item 1b" class="drop__menu-item">Item 1b</a></li>
        <li><a href="#" title="This is Item 2b" class="drop__menu-item">Item 2b</a></li>
      </ul>      
      <div class="drop__inset">
        <p>This is a drop inset.</p>
      </div>          
    </div>
  </div>

  <div class="drop drop--down drop--align-left drop--open">
    <button class="button button--base-light drop__toggle" type="button"><span>Toggle</span></button>
    <div class="drop__content">
      <h6 class="drop__title">This is a title</h6>
      <ul class="drop__menu" role="menu">
        <li><a href="#" title="This is Item 1a" class="drop__menu-item">Item 1a</a></li>
        <li><a href="#" title="This is Item 2a" class="drop__menu-item">Item 2a</a></li>
      </ul>
      <div class="drop__inset">
        <p>This is a drop inset.</p>
      </div> 
      <ul class="drop__menu" role="menu">
        <li><a href="#" title="This is Item 1b" class="drop__menu-item">Item 1b</a></li>
        <li><a href="#" title="This is Item 2b" class="drop__menu-item">Item 2b</a></li>
      </ul>
    </div>
  </div>

  <div class="drop drop--down drop--align-left drop--open">
    <button class="button button--base-light drop__toggle" type="button"><span>Toggle</span></button>
    <div class="drop__content">
      <div class="drop__inset">
        <p>This is a drop inset.</p>
      </div> 
      <ul class="drop__menu" role="menu">
        <li><a href="#" title="This is Item 1a" class="drop__menu-item">Item 1a</a></li>
        <li><a href="#" title="This is Item 2a" class="drop__menu-item">Item 2a</a></li>
      </ul>
    </div>
  </div>

  <div class="docs-example__inset">
{% highlight html %}
<div class="drop drop--down drop--align-left drop--open">
  <button class="button button--base-light drop__toggle" type="button"><span>Toggle</span></button>
  <div class="drop__content">
    <ul class="drop__menu" role="menu">
      <li><a href="#" title="This is Item 1a" class="drop__menu-item">Item 1a</a></li>
      <li><a href="#" title="This is Item 2a" class="drop__menu-item">Item 2a</a></li>
    </ul>
    <ul class="drop__menu" role="menu">
      <li><a href="#" title="This is Item 1b" class="drop__menu-item">Item 1b</a></li>
      <li><a href="#" title="This is Item 2b" class="drop__menu-item">Item 2b</a></li>
    </ul>      
    <div class="drop__inset">
      <p>This is a drop inset.</p>
    </div>          
  </div>
</div>

<div class="drop drop--down drop--align-left drop--open">
  <button class="button button--base-light drop__toggle" type="button"><span>Toggle</span></button>
  <div class="drop__content">
    <h6 class="drop__title">This is a title</h6>
    <ul class="drop__menu" role="menu">
      <li><a href="#" title="This is Item 1a" class="drop__menu-item">Item 1a</a></li>
      <li><a href="#" title="This is Item 2a" class="drop__menu-item">Item 2a</a></li>
    </ul>
    <div class="drop__inset">
      <p>This is a drop inset.</p>
    </div> 
    <ul class="drop__menu" role="menu">
      <li><a href="#" title="This is Item 1b" class="drop__menu-item">Item 1b</a></li>
      <li><a href="#" title="This is Item 2b" class="drop__menu-item">Item 2b</a></li>
    </ul>
  </div>
</div>

<div class="drop drop--down drop--align-left drop--open">
  <button class="button button--base-light drop__toggle" type="button"><span>Toggle</span></button>
  <div class="drop__content">
    <div class="drop__inset">
      <p>This is a drop inset.</p>
    </div> 
    <ul class="drop__menu" role="menu">
      <li><a href="#" title="This is Item 1a" class="drop__menu-item">Item 1a</a></li>
      <li><a href="#" title="This is Item 2a" class="drop__menu-item">Item 2a</a></li>
    </ul>
  </div>
</div>
{% endhighlight %} 
  </div>
</div>

### Iconified and selectable menus

<div class="docs-example">
  <div class="drop drop--down drop--align-left drop--open">
    <button class="button button--base-light drop__toggle drop__toggle--caret" type="button"><span>Toggle</span></button>
    <div class="drop__content">
      <h6 class="drop__title">This is a title</h6>
      <ul class="drop__menu drop__menu--iconified" role="menu">
        <li><a href="#" title="This is Item 1a" class="drop__menu-item"><i class="oam-ds-icon-pencil"></i>Edit</a></li>
        <li><a href="#" title="This is Item 2a" class="drop__menu-item drop__menu-item--example-icon">Download</a></li>
      </ul>
      <ul class="drop__menu drop__menu--iconified" role="menu">
        <li><a href="#" title="This is Item 1a" class="drop__menu-item delete"><i class="oam-ds-icon-trash-bin"></i>Delete</a></li>
      </ul>
    </div>
  </div>

  <div class="drop drop--down drop--align-left drop--open">
    <button class="button button--base-light drop__toggle drop__toggle--caret" type="button"><span>Toggle</span></button>
    <div class="drop__content">
      <h6 class="drop__title">This is a title</h6>
      <ul class="drop__menu drop__menu--select" role="menu">
        <li><a href="#" title="This is Item 1b" class="drop__menu-item drop__menu-item--active">Item 1b</a></li>
        <li><a href="#" title="This is Item 2b" class="drop__menu-item">Item 2b</a></li>
        <li><a href="#" title="This is Item 3b" class="drop__menu-item">Item 3b</a></li>
      </ul>
    </div>
  </div>

  <div class="docs-example__inset">
{% highlight html %}
<div class="drop drop--down drop--align-left drop--open">
  <button class="button button--base-light drop__toggle drop__toggle--caret" type="button"><span>Toggle</span></button>
  <div class="drop__content">
    <h6 class="drop__title">This is a title</h6>
    <ul class="drop__menu drop__menu--iconified" role="menu">
      <li><a href="#" title="This is Item 1a" class="drop__menu-item"><i class="oam-ds-icon-pencil"></i>Edit</a></li>
      <li><a href="#" title="This is Item 2a" class="drop__menu-item drop__menu-item--example-icon">Download</a></li>
    </ul>
    <ul class="drop__menu drop__menu--iconified" role="menu">
      <li><a href="#" title="This is Item 1a" class="drop__menu-item delete"><i class="oam-ds-icon-trash-bin"></i>Delete</a></li>
    </ul>
  </div>
</div>

<div class="drop drop--down drop--align-left drop--open">
  <button class="button button--base-light drop__toggle drop__toggle--caret" type="button"><span>Toggle</span></button>
  <div class="drop__content">
    <h6 class="drop__title">This is a title</h6>
    <ul class="drop__menu drop__menu--select" role="menu">
      <li><a href="#" title="This is Item 1b" class="drop__menu-item drop__menu-item--active">Item 1b</a></li>
      <li><a href="#" title="This is Item 2b" class="drop__menu-item">Item 2b</a></li>
      <li><a href="#" title="This is Item 3b" class="drop__menu-item">Item 3b</a></li>
    </ul>
  </div>
</div>
{% endhighlight %} 
  </div>
</div>

## Panels

<div class="docs-example">
  <section class="panel">
    <header class="panel__header">
      <div class="panel__headline">
      <h1 class="panel__title"><span class="truncated">Panel title lorem ipsum dolor sit amet</span></h1>
        <div class="panel__subtitle">Panel subtitle</div>
      </div>
      <div class="panel__meta-actions">
        <button class="panel__button-dismiss" title="Dismiss panel"><span>Dismiss</span></button>
      </div>
    </header>
    <div class="panel__body">
      <div class="panel__body-inner">
        <p>This is the panel body.</p>
      </div>
    </div>
    <footer class="panel__footer"></footer>
  </section>

  <div class="docs-example__inset">
{% highlight html %}
<section class="panel">
  <header class="panel__header">
    <div class="panel__headline">
      <h1 class="panel__title">Panel title</h1>
      <div class="panel__subtitle">Panel subtitle</div>
    </div>
  </header>
  <div class="panel__body">
    <div class="panel__body-inner">
      <p>This is the panel body.</p>
    </div>
  </div>
  <footer class="panel__footer"></footer>
</section>
{% endhighlight %}         
  </div>
</div>

## Constructs

### Flag

<div class="docs-example">
  <article class="flag-construct flag-construct--align-top">
    <div class="flag-construct__media">
      <img alt="flag-construct image" width="160" height="160" src="https://placebear.com/g/320/320" />
    </div>
    <div class="flag-construct__body">
      <h3>This is a title</h3>
      <p>Morbi eget mattis ipsum. Donec massa nibh, bibendum at sem eu purus. Nunc in tortor eu tellus ultricies euismod.</p>
      <p>Duis massa mi, pharetra eu nisl non, scelerisque laoreet diam. Fusce in malesuada justo. Aenean vulputate mi a pharetra lorem ipsum tristique.</p>
      <button class="button button--base-light" type="button"><span>Action</span></button>
    </div>
  </article>

  <div class="docs-example__inset">
{% highlight html %}
<article class="flag-construct flag-construct--align-top">
  <div class="flag-construct__media">
    <img alt="flag-construct image" width="160" height="160" src="https://placebear.com/g/320/320" />
  </div>
  <div class="flag-construct__body">
    <h3>This is a title</h3>
    <p>Morbi eget mattis ipsum. Donec massa nibh, bibendum at sem eu purus. Nunc in tortor eu tellus ultricies euismod.</p>
    <p>Duis massa mi, pharetra eu nisl non, scelerisque laoreet diam. Fusce in malesuada justo. Aenean vulputate mi a pharetra lorem ipsum tristique.</p>
    <button class="button button--base-light" type="button"><span>Action</span></button>
  </div>
</article>
{% endhighlight %}         
  </div>
</div>

### Flag reverted

<div class="docs-example">
  <article class="flag-construct flag-construct--align-top">
    <div class="flag-construct__body">
      <h3>This is a title</h3>
      <p>Morbi eget mattis ipsum. Donec massa nibh, bibendum at sem eu purus. Nunc in tortor eu tellus ultricies euismod.</p>
      <p>Duis massa mi, pharetra eu nisl non, scelerisque laoreet diam. Fusce in malesuada justo. Aenean vulputate mi a pharetra lorem ipsum tristique.</p>
      <button class="button button--base-light" type="button"><span>Action</span></button>
    </div>
    <div class="flag-construct__media">
      <img alt="flag-construct image" width="160" height="160" src="https://placebear.com/g/320/320" />
    </div>
  </article>

  <div class="docs-example__inset">
{% highlight html %}
<article class="flag-construct flag-construct--align-top">
  <div class="flag-construct__body">
    <h3>This is a title</h3>
    <p>Morbi eget mattis ipsum. Donec massa nibh, bibendum at sem eu purus. Nunc in tortor eu tellus ultricies euismod.</p>
    <p>Duis massa mi, pharetra eu nisl non, scelerisque laoreet diam. Fusce in malesuada justo. Aenean vulputate mi a pharetra lorem ipsum tristique.</p>
    <button class="button button--base-light" type="button"><span>Action</span></button>
  </div>
  <div class="flag-construct__media">
    <img alt="flag-construct image" width="160" height="160" src="https://placebear.com/g/320/320" />
  </div>
</article>
{% endhighlight %}                  
  </div>
</div>

### Full bleed

<div class="docs-example docs-example--clipped">
  <figure class="bleed-full">
    <img class="image-full" width="2560" height="768" alt="Full bleed image" src="https://placebear.com/g/5120/1536" />
  </figure>

  <div class="docs-example__inset">
{% highlight html %}
<figure class="bleed-full">
  <img class="image-full" width="2560" height="768" alt="Full bleed image" src="https://placebear.com/g/5120/1536" />
</figure>
{% endhighlight %}                  
  </div>
</div>