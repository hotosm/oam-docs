---
layout: docs_page
id: Buttons
parent: Components

permalink: components/buttons/

title: Buttons
introduction: This is a page introduction. Morbi eget mattis ipsum. Donec massa nibh, bibendum at sit amet ipsum.
---

Button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, etc.

## Colors

<div class="demo-example">
  <button class="button button--base-light" type="button"><span>Base light</span></button>
  <button class="button button--base-dark" type="button"><span>Base dark</span></button>
  <button class="button button--primary" type="button"><span>Primary</span></button>
  <button class="button button--secondary" type="button"><span>Secondary</span></button>

  <div class="demo-example__inset">
{% highlight html %}
<button class="button button--base-light" type="button"><span>Base light</span></button>
<button class="button button--base-dark" type="button"><span>Base dark</span></button>
<button class="button button--primary" type="button"><span>Primary</span></button>
<button class="button button--secondary" type="button"><span>Secondary</span></button>
{% endhighlight %}                  
  </div>
</div>

## Sizes

<div class="demo-example">
  <button class="button button--base-light button--small" type="button"><span>Small</span></button>
  <button class="button button--base-light button--medium" type="button"><span>Medium</span></button>
  <button class="button button--base-light button--large" type="button"><span>Large</span></button>

  <div class="demo-example__inset">
{% highlight html %}
<button class="button button--base-light button--small" type="button"><span>Small</span></button>
<button class="button button--base-light button--medium" type="button"><span>Medium</span></button>
<button class="button button--base-light button--large" type="button"><span>Large</span></button>
{% endhighlight %}                  
  </div>
</div>

## States

<div class="demo-example">
  <button class="button button--base-light button--active" type="button"><span>Active</span></button>
  <button class="button button--base-light disabled" type="button"><span>Disabled</span></button>

  <div class="demo-example__inset">
{% highlight html %}
<button class="button button--base-light button--active" type="button"><span>Active</span></button>
<button class="button button--base-light disabled" type="button"><span>Disabled</span></button>
{% endhighlight %}                  
  </div>
</div>

## Iconified

<div class="demo-example">
  <button class="button button--base-light button--text-hidden" type="button"><i class="oam-ds-icon-clock"></i><span>Hidden text</span></button>
  <button class="button button--base-light" type="button"><i class="oam-ds-icon-clock"></i> <span>Visible text</span></button>
  <button class="button button--base-light button--icon" type="button"></i><span>Pseudo-element</span></button>

  <div class="demo-example__inset">
{% highlight html %}
<button class="button button--base-light button--text-hidden" type="button"><i class="oam-ds-icon-clock"></i><span>Hidden text</span></button>
<button class="button button--base-light" type="button"><i class="oam-ds-icon-clock"></i> <span>Visible text</span></button>
<button class="button button--base-light button--icon" type="button"></i><span>Pseudo-element</span></button>
{% endhighlight %}                  
  </div>
</div>

## Groups

<div class="demo-example">

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

  <div class="demo-example__inset">
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