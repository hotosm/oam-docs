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

<div class="exhibit">
  <div class="exhibit__content">
    <article class="flag-construct flag-construct--align-top">
      <div class="flag-construct__media">
        <img alt="flag-construct image" width="320" height="320" src="{{ site.baseurl }}/assets/graphics/content/design/earth-img-square.jpg" />
      </div>
      <div class="flag-construct__body">
        <h3>This is a title</h3>
        <p>Morbi eget mattis ipsum. Donec massa nibh, bibendum at sem eu purus. Nunc in tortor eu tellus ultricies euismod.</p>
        <p>Duis massa mi, pharetra eu nisl non, scelerisque laoreet diam. Fusce in malesuada justo. Aenean vulputate mi a pharetra lorem ipsum tristique.</p>
        <button class="button button--achromic" type="button"><span>Action</span></button>
      </div>
    </article>
  </div>

  <div class="exhibit__caption">
{% highlight html %}
<article class="flag-construct flag-construct--align-top">
  <div class="flag-construct__media">
    <img alt="flag-construct image" width="320" height="320" src="{{ site.baseurl }}/assets/graphics/content/design/earth-img-square.jpg" />
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

<div class="exhibit">
  <div class="exhibit__content">
    <article class="flag-construct flag-construct--align-top">
      <div class="flag-construct__body">
        <h3>This is a title</h3>
        <p>Morbi eget mattis ipsum. Donec massa nibh, bibendum at sem eu purus. Nunc in tortor eu tellus ultricies euismod.</p>
        <p>Duis massa mi, pharetra eu nisl non, scelerisque laoreet diam. Fusce in malesuada justo. Aenean vulputate mi a pharetra lorem ipsum tristique.</p>
        <button class="button button--achromic" type="button"><span>Action</span></button>
      </div>
      <div class="flag-construct__media">
        <img alt="flag-construct image" width="320" height="320" src="{{ site.baseurl }}/assets/graphics/content/design/earth-img-square.jpg" />
      </div>
    </article>
  </div>

  <div class="exhibit__caption">
{% highlight html %}
<article class="flag-construct flag-construct--align-top">
  <div class="flag-construct__body">
    <h3>This is a title</h3>
    <p>Morbi eget mattis ipsum. Donec massa nibh, bibendum at sem eu purus. Nunc in tortor eu tellus ultricies euismod.</p>
    <p>Duis massa mi, pharetra eu nisl non, scelerisque laoreet diam. Fusce in malesuada justo. Aenean vulputate mi a pharetra lorem ipsum tristique.</p>
    <button class="button button--achromic" type="button"><span>Action</span></button>
  </div>
  <div class="flag-construct__media">
    <img alt="flag-construct image" width="320" height="320" src="{{ site.baseurl }}/assets/graphics/content/design/earth-img-square.jpg" />
  </div>
</article>
{% endhighlight %}                  
  </div>
</div>

## Full bleed

<div class="exhibit exhibit--clipped">
  <div class="exhibit__content">
    <figure class="bleed-full">
      <img class="image-full" width="2560" height="768" alt="Full bleed image" src="{{ site.baseurl }}/assets/graphics/content/design/earth-img-wide.jpg" />
    </figure>
  </div>

  <div class="exhibit__caption">
{% highlight html %}
<figure class="bleed-full">
  <img class="image-full" width="2560" height="768" alt="Full bleed image" src="{{ site.baseurl }}/assets/graphics/content/design/earth-img-wide.jpg" />
</figure>
{% endhighlight %}                  
  </div>
</div>