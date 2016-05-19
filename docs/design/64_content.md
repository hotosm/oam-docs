---
layout: article
id: Content
parent: Design System

permalink: design-system/content/

title: Content
introduction: Styles for displaying content with some of the most commonly used HTML elements, including typography, tables, code and more.
---

## Typography

### Headings

Available `<h1>` through `<h6>`, and through `.heading--xxsmall`  to `.heading--large` + `.heading` modifiers, for when you want to match the font styling of a heading without changing the markup.

A special appearance of heading is also posible via `.heading-alt`. Used in table headings, definition list terms, etc.

<div class="exhibit">
  <div class="exhibit__content">
    <h1>This is an h1 heading</h1>
    <h2>This is an h2 heading</h2>
    <h3>This is an h3 heading</h3>
    <h4>This is an h4 heading</h4>
    <h5>This is an h5 heading</h5>
    <h6>This is an h6 heading</h6>
    <h6 class="heading-alt">This an alt heading</h6>
  </div>

  <div class="exhibit__caption">
{% highlight html %}
<h1>This is an h1 heading</h1>
<h2>This is an h2 heading</h2>
<h3>This is an h3 heading</h3>
<h4>This is an h4 heading</h4>
<h5>This is an h5 heading</h5>
<h6>This is an h6 heading</h6>
<h6 class="heading-alt">This an alt heading</h6>
{% endhighlight %}                  
  </div>
</div>

### Lead

<div class="exhibit">
  <div class="exhibit__content">
  <p class="lead">This is a lead paragraph. Morbi eget mattis ipsum. Donec massa nibh, bibendum at sit amet ipsum.</p>
  </div>

  <div class="exhibit__caption">
{% highlight html %}
<p class="lead">This is a lead paragraph. Morbi eget mattis ipsum. Donec massa nibh, bibendum at sit amet ipsum.</p>
{% endhighlight %}                  
  </div>
</div>

### Blockquotes

<div class="exhibit">
  <div class="exhibit__content">
  <blockquote>
    <p>As my fellow HTML5 Doctor, Oli Studholme has showed, people seldom quote exactly 
    – so sacrosanctity of the quoted text isn’t a useful ideal – and in print etc, 
    citations almost always appear as part of the quotation – it’s highly conventional.</p>
    <footer>
      <cite><a href="http://www.brucelawson.co.uk/2013/on-citing-quotations-again/">Bruce Lawson</a></cite>
    </footer>
  </blockquote>
  </div>

  <div class="exhibit__caption">
{% highlight html %}
<blockquote>
  <p>As my fellow HTML5 Doctor, Oli Studholme has showed, people seldom quote exactly 
  – so sacrosanctity of the quoted text isn’t a useful ideal – and in print etc, 
  citations almost always appear as part of the quotation – it’s highly conventional.</p>
  <footer>
    <cite><a href="http://www.brucelawson.co.uk/2013/on-citing-quotations-again/">Bruce Lawson</a></cite>
  </footer>
</blockquote>
{% endhighlight %}                  
  </div>
</div>

### Inline text elements

<div class="exhibit">
  <div class="exhibit__content">
  <p><mark>Highlight</mark>. <del>Deleted</del>. <s>Innacurate or irrelevant</s>.</p>
  <p><ins>Added</ins>. <u>Underlined</u>. <small>Small text</small>.</p>
  <p><strong>Bold</strong>. <em>Italicized</em>.</p>
  <p>The abbr tag is used to represent an <abbr title="attribute">abbreviation</abbr>.</p>  </div>

  <div class="exhibit__caption">
{% highlight html %}
<p><mark>Highlight</mark>. <del>Deleted</del>. <s>Innacurate or irrelevant</s>.</p>
<p><ins>Added</ins>. <u>Underlined</u>. <small>Small text</small>.</p>
<p><strong>Bold</strong>. <em>Italicized</em>.</p>
<p>The abbr tag is used to represent an <abbr title="attribute">abbreviation</abbr>.</p>
{% endhighlight %}                  
  </div>
</div>

### Lists

#### Unordered

<div class="exhibit">
  <div class="exhibit__content">
  <ul>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Ac tristique libero volutpat at</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
  </ul>
  </div>

  <div class="exhibit__caption">
{% highlight html %}
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
</ul>
{% endhighlight %}                  
  </div>
</div>

#### Ordered

<div class="exhibit">
  <div class="exhibit__content">
  <ol>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
      <ol>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
      </ol>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
  </ol>
  </div>

  <div class="exhibit__caption">
{% highlight html %}
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
    <ol>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
    </ol>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
</ol>
{% endhighlight %}                  
  </div>
</div>

#### Descriptive

<div class="exhibit">
  <div class="exhibit__content">
  <dl>
    <dt>Description list term</dt>
    <dd>Description list description.</dd>
    <dt>Euismod lorem ipsum dolor sit amet</dt>
    <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
    <dd>Donec id elit non mi porta gravida at eget metus.</dd>
    <dd>Third.</dd>
    <dt>Malesuada porta</dt>
    <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
    <dt>Yet another term</dt>
    <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
  </dl>
  </div>

  <div class="exhibit__caption">
{% highlight html %}
<dl>
  <dt>Description list term</dt>
  <dd>Description list description.</dd>
  <dt>Euismod lorem ipsum dolor sit amet</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
  <dd>Third.</dd>
  <dt>Malesuada porta</dt>
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
  <dt>Yet another term</dt>
  <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
</dl>
{% endhighlight %}                  
  </div>
</div>

#### Horizontal Descriptive

<div class="exhibit">
  <div class="exhibit__content">
  <dl class="dl-horizontal">
    <dt>Description list term</dt>
    <dd>Description list description.</dd>
    <dt>Euismod lorem ipsum dolor sit amet</dt>
    <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
    <dd>Donec id elit non mi porta gravida at eget metus.</dd>
    <dd>Third.</dd>
    <dt>Malesuada porta</dt>
    <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
    <dt>Yet another term</dt>
    <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
  </dl>
  </div>

  <div class="exhibit__caption">
{% highlight html %}
<dl class="dl-horizontal">
  <dt>Description list term</dt>
  <dd>Description list description.</dd>
  <dt>Euismod lorem ipsum dolor sit amet</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
  <dd>Third.</dd>
  <dt>Malesuada porta</dt>
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
  <dt>Yet another term</dt>
  <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
</dl>
{% endhighlight %}                  
  </div>
</div>

### Horizontal rulers

<div class="exhibit">
  <div class="exhibit__content">
  <hr />
  </div>

  <div class="exhibit__caption">
{% highlight html %}
<hr />
{% endhighlight %}                  
  </div>
</div>

## Tables

### Example

<div class="exhibit">
  <div class="exhibit__content">
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Lorem</th>
        <th><a class="table__sort table__sort--none" title="Sort column"><span>Ipsum Dolor</span></a></th>
        <th>Sit Amet</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Aliquam erat</td>
        <td>Volutpat</td>
        <td>Praesent</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Aenean</td>
        <td>Finibus</td>
        <td>Accumsan</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Phasellus</td>
        <td>Consequat</td>
        <td>Vivamus</td>
      </tr>
    </tbody>
  </table>
  </div>

  <div class="exhibit__caption">
{% highlight html %}
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Lorem</th>
      <th><a class="table__sort table__sort--none" title="Sort column"><span>Ipsum Dolor</span></a></th>
      <th>Sit Amet</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Aliquam erat</td>
      <td>Volutpat</td>
      <td>Praesent</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Aenean</td>
      <td>Finibus</td>
      <td>Accumsan</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Phasellus</td>
      <td>Consequat</td>
      <td>Vivamus</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}                  
  </div>
</div>

### Zebra

<div class="exhibit">
  <div class="exhibit__content">
  <table class="table table--zebra">
    <thead>
      <tr>
        <th>#</th>
        <th>Lorem</th>
        <th>Ipsum Dolor</th>
        <th>Sit Amet</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Aliquam erat</td>
        <td>Volutpat</td>
        <td>Praesent</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Aenean</td>
        <td>Finibus</td>
        <td>Accumsan</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Phasellus</td>
        <td>Consequat</td>
        <td>Vivamus</td>
      </tr>
    </tbody>
  </table>
  </div>

  <div class="exhibit__caption">
{% highlight html %}
<table class="table table--zebra">
  <thead>
    <tr>
      <th>#</th>
      <th>Lorem</th>
      <th>Ipsum Dolor</th>
      <th>Sit Amet</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Aliquam erat</td>
      <td>Volutpat</td>
      <td>Praesent</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Aenean</td>
      <td>Finibus</td>
      <td>Accumsan</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Phasellus</td>
      <td>Consequat</td>
      <td>Vivamus</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}                  
  </div>
</div>

## Code

### Inline

<div class="exhibit">
  <div class="exhibit__content">
  This contains code rendered inline: <code>&lt;article&gt;</code>.
  </div>

  <div class="exhibit__caption">
{% highlight html %}
This contains code rendered inline: <code>&lt;article&gt;</code>.
{% endhighlight %}                  
  </div>
</div>

### Preformatted

<div class="exhibit">
  <div class="exhibit__content">
<pre>&lt;p&gt;Lorem ipsum dolor...&lt;/p&gt;</pre>
  </div>

  <div class="exhibit__caption">
{% highlight html %}
<pre>&lt;p&gt;Lorem ipsum dolor...&lt;/p&gt;</pre>
{% endhighlight %}                  
  </div>
</div>

### User input

<div class="exhibit">
  <div class="exhibit__content">
  This contains instructions: lorem ipsum <kbd>cd</kbd> dolor sit <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
  </div>

  <div class="exhibit__caption">
{% highlight html %}
This contains instructions: lorem ipsum <kbd>cd</kbd> dolor sit <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
{% endhighlight %}                  
  </div>
</div>