---
layout: docs_page
id: Components
parent: Design

permalink: design/components/

title: Components
introduction: Reusable components, including buttons, drops, alerts and more.
---

## Buttons

### Colors

<div class="docs-example">
  <button class="button button--achromic" type="button"><span>Achromic</span></button>
  <button class="button button--base" type="button"><span>Base</span></button>
  <button class="button button--primary" type="button"><span>Primary</span></button>
  <button class="button button--secondary" type="button"><span>Secondary</span></button>
  <button class="button button--base-unbounded" type="button"><span>Base unbounded</span></button>
  <button class="button button--primary-unbounded" type="button"><span>Primary unbounded</span></button>
  <button class="button button--secondary-unbounded" type="button"><span>Secondary unbounded</span></button>

  <div class="docs-example__inset">
{% highlight html %}
<button class="button button--achromic" type="button"><span>Achromic</span></button>
<button class="button button--base" type="button"><span>Base</span></button>
<button class="button button--primary" type="button"><span>Primary</span></button>
<button class="button button--secondary" type="button"><span>Secondary</span></button>
<button class="button button--base-unbounded" type="button"><span>Base unbounded</span></button>
<button class="button button--primary-unbounded" type="button"><span>Primary unbounded</span></button>
<button class="button button--secondary-unbounded" type="button"><span>Secondary unbounded</span></button>
{% endhighlight %}                  
  </div>
</div>

### Sizes

<div class="docs-example">
  <button class="button button--achromic button--small" type="button"><span>Small</span></button>
  <button class="button button--achromic button--medium" type="button"><span>Medium</span></button>
  <button class="button button--achromic button--large" type="button"><span>Large</span></button>

  <div class="docs-example__inset">
{% highlight html %}
<button class="button button--achromic button--small" type="button"><span>Small</span></button>
<button class="button button--achromic button--medium" type="button"><span>Medium</span></button>
<button class="button button--achromic button--large" type="button"><span>Large</span></button>
{% endhighlight %}                  
  </div>
</div>

### States

<div class="docs-example">
  <button class="button button--achromic button--active" type="button"><span>Active</span></button>
  <button class="button button--achromic disabled" type="button"><span>Disabled</span></button>

  <div class="docs-example__inset">
{% highlight html %}
<button class="button button--achromic button--active" type="button"><span>Active</span></button>
<button class="button button--achromic disabled" type="button"><span>Disabled</span></button>
{% endhighlight %}                  
  </div>
</div>

### Iconified

<div class="docs-example">
  <button class="button button--achromic button--text-hidden" type="button"><i class="meh oam-ds-icon-clock"></i><span>Hidden text</span></button>
  <button class="button button--achromic" type="button"><i class="oam-ds-icon-download"></i> <span>Visible text</span></button>
  <button class="button button--achromic button--example-icon" type="button"><span>Pseudo-element</span></button>

  <div class="docs-example__inset">
{% highlight html %}
<button class="button button--achromic button--text-hidden" type="button"><i class="oam-ds-icon-clock"></i><span>Hidden text</span></button>
<button class="button button--achromic" type="button"><i class="oam-ds-icon-clock"></i> <span>Visible text</span></button>
<button class="button button--achromic button--icon" type="button"></i><span>Pseudo-element</span></button>
{% endhighlight %}                  
  </div>
</div>

### Groups

<div class="docs-example">

  <div class="button-group button-group--horizontal" role="group" aria-label="...">
    <button class="button button--achromic button--active" type="button"><span>Left</span></button>
    <button class="button button--achromic" type="button"><span>Middle</span></button>
    <button class="button button--achromic" type="button"><span>Right</span></button>
  </div>

  <div class="button-group button-group--large button-group--horizontal">
    <label class="button button--achromic button--active" for="option-1">
      <input type="checkbox" id="option-1" checked=""> CB1 (pre-checked)
    </label>
    <label class="button button--achromic" for="option-2">
      <input type="checkbox" id="option-2"> CB2
    </label>
    <label class="button button--achromic" for="option-3">
      <input type="checkbox" id="option-3"> CB3
    </label>
  </div>

  <div class="button-group button-group--vertical" role="group" aria-label="...">
    <button class="button button--achromic" type="button"><span>Top</span></button>
    <button class="button button--achromic" type="button"><span>Middle</span></button>
    <button class="button button--achromic" type="button"><span>Bottom</span></button>
  </div>

  <div class="docs-example__inset">
{% highlight html %}
<div class="button-group button-group--horizontal" role="group" aria-label="...">
  <button class="button button--achromic button--active" type="button"><span>Left</span></button>
  <button class="button button--achromic" type="button"><span>Middle</span></button>
  <button class="button button--achromic" type="button"><span>Right</span></button>
</div>

<div class="button-group button-group--large button-group--horizontal">
  <label class="button button--achromic button--active" for="option-1">
    <input type="checkbox" id="option-1" checked=""> CB1 (pre-checked)
  </label>
  <label class="button button--achromic" for="option-2">
    <input type="checkbox" id="option-2"> CB2
  </label>
  <label class="button button--achromic" for="option-3">
    <input type="checkbox" id="option-3"> CB3
  </label>
</div>

<div class="button-group button-group--vertical" role="group" aria-label="...">
  <button class="button button--achromic" type="button"><span>Top</span></button>
  <button class="button button--achromic" type="button"><span>Middle</span></button>
  <button class="button button--achromic" type="button"><span>Bottom</span></button>
</div>
{% endhighlight %}                  
  </div>
</div>

## Forms <small>(Work in progress)</small>

<div class="docs-example">
  <form id="upload-form" class="form form--horizontal">
    <fieldset class="form__fieldset general">
      <legend class="form__legend">Legend</legend>
      <div class="form__group">
        <label class="form__label" for="input-a1">Label</label>
        <div class="form__control-set">
          <input type="text" class="form__control" placeholder="Placeholder" name="input-a1" id="input-a1" value="" />
        </div>
      </div>
    </fieldset>
  </form>
</div>

## Drops

### Examples

<div class="docs-example">
  <div class="drop drop--down drop--align-left drop--open">
    <button class="button button--achromic drop__toggle" type="button"><span>Toggle</span></button>
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
    <button class="button button--achromic drop__toggle" type="button"><span>Toggle</span></button>
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
    <button class="button button--achromic drop__toggle" type="button"><span>Toggle</span></button>
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
  <button class="button button--achromic drop__toggle" type="button"><span>Toggle</span></button>
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
  <button class="button button--achromic drop__toggle" type="button"><span>Toggle</span></button>
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
  <button class="button button--achromic drop__toggle" type="button"><span>Toggle</span></button>
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
    <button class="button button--achromic drop__toggle drop__toggle--caret" type="button"><span>Toggle</span></button>
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
    <button class="button button--achromic drop__toggle drop__toggle--caret" type="button"><span>Toggle</span></button>
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
  <button class="button button--achromic drop__toggle drop__toggle--caret" type="button"><span>Toggle</span></button>
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
  <button class="button button--achromic drop__toggle drop__toggle--caret" type="button"><span>Toggle</span></button>
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
      <h1 class="panel__title">Panel title lorem ipsum dolor sit amet</h1>
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

## Alerts

### Block

<div class="docs-example">
  <div class="alert alert--success" role="alert">
    <button class="alert__button-dismiss" title="Dismiss alert"><span>Dismiss</span></button>
    <p><strong>Success:</strong> This is a success alert message.</p>
  </div>

  <div class="alert alert--info" role="alert">
    <button class="alert__button-dismiss" title="Dismiss alert"><span>Dismiss</span></button>
    <p><strong>Info:</strong> This is an info alert message.</p>
  </div>

  <div class="alert alert--warning" role="alert">
    <button class="alert__button-dismiss" title="Dismiss alert"><span>Dismiss</span></button>
    <p><strong>Warning:</strong> This is a warning alert message.</p>
  </div>

  <div class="alert alert--danger" role="alert">
    <button class="alert__button-dismiss" title="Dismiss alert"><span>Dismiss</span></button>
    <p><strong>Danger:</strong> This is a danger alert message.</p>
  </div>

  <div class="docs-example__inset">
{% highlight html %}
<div class="alert alert--success" role="alert">
  <button class="alert__button-dismiss" title="Dismiss alert"><span>Dismiss</span></button>
  <p><strong>Success:</strong> This is a success alert message.</p>
</div>

<div class="alert alert--info" role="alert">
  <button class="alert__button-dismiss" title="Dismiss alert"><span>Dismiss</span></button>
  <p><strong>Info:</strong> This is an info alert message.</p>
</div>

<div class="alert alert--warning" role="alert">
  <button class="alert__button-dismiss" title="Dismiss alert"><span>Dismiss</span></button>
  <p><strong>Warning:</strong> This is a warning alert message.</p>
</div>

<div class="alert alert--danger" role="alert">
  <button class="alert__button-dismiss" title="Dismiss alert"><span>Dismiss</span></button>
  <p><strong>Danger:</strong> This is a danger alert message.</p>
</div>
{% endhighlight %}         
  </div>
</div>

### Popover

<div class="docs-example">
  <div class="alert alert--popover alert--danger" role="alert">
    <button class="alert__button-dismiss" title="Dismiss alert"><span>Dismiss</span></button>
    <p><strong>Danger:</strong> This is a danger alert message. Popover style!</p>
  </div>

  <div class="docs-example__inset">
{% highlight html %}
<div class="alert alert--popover alert--danger" role="alert">
  <button class="alert__button-dismiss" title="Dismiss alert"><span>Dismiss</span></button>
  <p><strong>Danger:</strong> This is a danger alert message. Popover style!</p>
</div>
{% endhighlight %}         
  </div>
</div>