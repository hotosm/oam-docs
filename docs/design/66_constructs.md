---
layout: article
id: Constructs
parent: Design System

permalink: design-system/constructs/

title: Constructs
introduction: Reusable layout common patterns.
---

## Flag

### Regular

<div class="docs-example">
  <article class="flag-construct flag-construct--align-top">
    <div class="flag-construct__media">
      <img alt="flag-construct image" width="160" height="160" src="https://placebear.com/g/320/320" />
    </div>
    <div class="flag-construct__body">
      <h3>This is a title</h3>
      <p>Morbi eget mattis ipsum. Donec massa nibh, bibendum at sem eu purus. Nunc in tortor eu tellus ultricies euismod.</p>
      <p>Duis massa mi, pharetra eu nisl non, scelerisque laoreet diam. Fusce in malesuada justo. Aenean vulputate mi a pharetra lorem ipsum tristique.</p>
      <button class="button button--achromic" type="button"><span>Action</span></button>
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
    <button class="button button--achromic" type="button"><span>Action</span></button>
  </div>
</article>
{% endhighlight %}         
  </div>
</div>

### Reverted

<div class="docs-example">
  <article class="flag-construct flag-construct--align-top">
    <div class="flag-construct__body">
      <h3>This is a title</h3>
      <p>Morbi eget mattis ipsum. Donec massa nibh, bibendum at sem eu purus. Nunc in tortor eu tellus ultricies euismod.</p>
      <p>Duis massa mi, pharetra eu nisl non, scelerisque laoreet diam. Fusce in malesuada justo. Aenean vulputate mi a pharetra lorem ipsum tristique.</p>
      <button class="button button--achromic" type="button"><span>Action</span></button>
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
    <button class="button button--achromic" type="button"><span>Action</span></button>
  </div>
  <div class="flag-construct__media">
    <img alt="flag-construct image" width="160" height="160" src="https://placebear.com/g/320/320" />
  </div>
</article>
{% endhighlight %}                  
  </div>
</div>

## Full bleed

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