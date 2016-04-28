---
layout: docs_page
id: Content
parent: Design

permalink: design/content/

title: Content
introduction: This is a page introduction. Morbi eget mattis ipsum. Donec massa nibh, bibendum at sit amet ipsum.
---

## Typography

### Headings

Available `<h1>` through `<h6>`, and through `.heading--xxsmall`  to `.heading--large` + `.heading` modifiers, for when you want to match the font styling of a heading without changing the markup.

A special appearance of heading is also posible via `.heading-alt`. Used in table headings, definition list terms, etc.

<div class="docs-example">
  <h1>This is an h1 heading</h1>
  <h2>This is an h2 heading</h2>
  <h3>This is an h3 heading</h3>
  <h4>This is an h4 heading</h4>
  <h5>This is an h5 heading</h5>
  <h6>This is an h6 heading</h6>
  <h6 class="heading-alt">This an alt heading</h6>

  <div class="docs-example__inset">
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

<div class="docs-example">
  <p class="lead">This is a lead paragraph. Morbi eget mattis ipsum. Donec massa nibh, bibendum at sit amet ipsum.</p>

  <div class="docs-example__inset">
{% highlight html %}
<p class="lead">This is a lead paragraph. Morbi eget mattis ipsum. Donec massa nibh, bibendum at sit amet ipsum.</p>
{% endhighlight %}                  
  </div>
</div>

### Blockquotes

<div class="docs-example">
  <blockquote>
    <p>As my fellow HTML5 Doctor, Oli Studholme has showed, people seldom quote exactly 
    – so sacrosanctity of the quoted text isn’t a useful ideal – and in print etc, 
    citations almost always appear as part of the quotation – it’s highly conventional.</p>
    <footer>
      <cite><a href="http://www.brucelawson.co.uk/2013/on-citing-quotations-again/">Bruce Lawson</a></cite>
    </footer>
  </blockquote>

  <div class="docs-example__inset">
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

<div class="docs-example">
  <p>You can use the mark tag to <mark>highlight</mark> text.</p>
  <p><del>This line of text is meant to be treated as deleted text.</del></p>
  <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
  <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
  <p><u>This line of text will render as underlined</u></p>
  <p><small>This line of text is meant to be treated as fine print.</small></p>
  <p><strong>This line rendered as bold text.</strong></p>
  <p><em>This line rendered as italicized text.</em></p>
  <p>You can use the abbr tag to represent an <abbr title="attribute">abbreviation</abbr>.</p>

  <div class="docs-example__inset">
{% highlight html %}
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
<p>You can use the abbr tag to represent an <abbr title="attribute">abbreviation</abbr>.</p>
{% endhighlight %}                  
  </div>
</div>

### Lists

#### Unordered

<div class="docs-example">
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

  <div class="docs-example__inset">
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

<div class="docs-example">
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

  <div class="docs-example__inset">
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

<div class="docs-example">
  <dl>
    <dt>Description list term</dt>
    <dd>A description list is perfect for defining terms.</dd>
    <dt>Euismod lorem ipsum dolor sit amet</dt>
    <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
    <dd>Donec id elit non mi porta gravida at eget metus.</dd>
    <dd>Third.</dd>
    <dt>Malesuada porta</dt>
    <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
    <dt>Yet another term</dt>
    <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
  </dl>

  <div class="docs-example__inset">
{% highlight html %}
<dl>
  <dt>Description list term</dt>
  <dd>A description list is perfect for defining terms.</dd>
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

<div class="docs-example">
  <dl class="dl-horizontal">
    <dt>Description list term</dt>
    <dd>A description list is perfect for defining terms.</dd>
    <dt>Euismod lorem ipsum dolor sit amet</dt>
    <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
    <dd>Donec id elit non mi porta gravida at eget metus.</dd>
    <dd>Third.</dd>
    <dt>Malesuada porta</dt>
    <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
    <dt>Yet another term</dt>
    <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
  </dl>

  <div class="docs-example__inset">
{% highlight html %}
<dl class="dl-horizontal">
  <dt>Description list term</dt>
  <dd>A description list is perfect for defining terms.</dd>
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

<div class="docs-example">
  <hr />

  <div class="docs-example__inset">
{% highlight html %}
<hr />
{% endhighlight %}                  
  </div>
</div>

## Tables

### Regular

<div class="docs-example">
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>

  <div class="docs-example__inset">
{% highlight html %}
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}                  
  </div>
</div>

### Zebra

<div class="docs-example">
  <table class="table table--zebra">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>

  <div class="docs-example__inset">
{% highlight html %}
<table class="table table--zebra">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}                  
  </div>
</div>

## Code

### Inline

<div class="docs-example">
  For example, <code>&lt;section&gt;</code> should be wrapped as inline.

  <div class="docs-example__inset">
{% highlight html %}
For example, <code>&lt;section&gt;</code> should be wrapped as inline.
{% endhighlight %}                  
  </div>
</div>

### Preformatted

<div class="docs-example">
<pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre>

  <div class="docs-example__inset">
{% highlight html %}
<pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre>
{% endhighlight %}                  
  </div>
</div>

### User input

<div class="docs-example">
  To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
  To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>

  <div class="docs-example__inset">
{% highlight html %}
To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
{% endhighlight %}                  
  </div>
</div>