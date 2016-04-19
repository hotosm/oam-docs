---
layout: docs_page
id: Drops
parent: Components

permalink: components/drops/

title: Drops
introduction: This is a page introduction. Morbi eget mattis ipsum. Donec massa nibh, bibendum at sit amet ipsum.
---

## Simple

<div class="docs-example">
  <div class="drop drop--down drop--align-left drop--open">
    <button class="button button--base-light drop__toggle" type="button"><span>Toggle</span></button>
    <div class="drop__content"> 
      <ul class="drop__menu" role="menu">
        <li><a href="#" title="This is Item 1a" class="drop__menu-item">Item 1a</a></li>
        <li><a href="#" title="This is Item 2a" class="drop__menu-item">Item 2a</a></li>
        <li><a href="#" title="This is Item 3a" class="drop__menu-item">Item 3a</a></li>
      </ul>
    </div>
  </div>

  <div class="docs-example__inset">
{% highlight html %}

{% endhighlight %}         
  </div>
</div>

## Compound

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
  </div>
</div>

## Iconified menu

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

  <div class="docs-example__inset">     
  </div>
</div>


## Selectable menu

<div class="docs-example">
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
  </div>
</div>