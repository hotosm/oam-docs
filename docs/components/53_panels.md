---
layout: docs_page
id: Panels
parent: Components

permalink: components/panels/

title: Panels
introduction: This is a page introduction. Morbi eget mattis ipsum. Donec massa nibh, bibendum at sit amet ipsum.
---

<div class="docs-example">
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