---
layout: article
id: Iconography
parent: Design System

permalink: design-system/iconography/

title: Iconography
introduction: Showcase and instructions for the OAM UI icon library.
---

The OAM Design System includes a small library of UI icons based off [Collecticons](http://collecticons.io/) to be used on web applications. This icon font can be easily customized using just CSS: size, color, drop shadow, etc.

### Showcase

<ul class="icons-list">
{% for icon in site.data.oam-icons-catalog %}
  <li>
    <figure class="exhibit" data-title="{{ icon }}">
    	<div class="exhibit__content">
        <span class="gliph {{ icon }}"></span>
      </div>
      <figcaption class="exhibit__caption">{{ icon }}</figcaption>
    </figure>
  </li>
{% endfor %}
</ul>

### Usage

You can place OAM icons just about anywhere using the respective CSS class. The icon library is designed to be used with inline elements (we like the `<i>` tag for brevity, but using a `<span>` is more semantically correct). 
{% highlight html %}
<button><i class="oam-ds-icon-circle-information"></i> Info</button>
{% endhighlight %}

You can also use `scss` extends for a semantic approach:
{% highlight html %}
<button class="bttn-info">Info</button>
{% endhighlight %}
{% highlight scss %}
.bttn-info {
  :before {
    @extend %oam-ds-icon-circle-information;
  }
}
{% endhighlight %}
The advantage of the semantic approach is that there's no need for any extra markup and it is possible to choose on which pseudo-element to apply the icon.
