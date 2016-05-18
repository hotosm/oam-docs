---
layout: article
id: Iconography
parent: Design System

permalink: design-system/oam-icons/

title: Iconography
introduction: Showcase and instructions for the OAM UI icon library.
---

The OAM Design System includes a small library of UI icons based off [Collecticons](http://collecticons.io/) to be used on web applications.

### Showcase

<ul class="showcase-list">
{% for icon in site.data.oam-icons-catalog %}
  <li>
    <div data-title="{{ icon }}">
      <span class="label">{{ icon }}</span>
      <span class="{{ icon }}"></span>
    </div>
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
