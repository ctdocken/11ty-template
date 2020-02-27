---
title: 11ty Template
---

<h2>Recent Posts</h2>

{%- for article in collections.articles.reverse().slice(0,5) -%}
{% articleCard article %}
{%- endfor -%}
