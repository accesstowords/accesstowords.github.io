---
title: 'Education'
layout: posts
---

# Education

![]()

{%- for post in site.data.posts-public-sector %}
{% if post.department == "education" %}
<a href="{{ post.link }}">
{{ post.title }}</a>
<hr />
{%- endif %}
{%- endfor %}