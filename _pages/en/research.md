---
layout: page
title: Research
permalink: /en/research/
lang: en
lang_alt_url: /research/
nav: true
nav_order: 2
---

<div class="project">

{% assign sorted_projects = site.research | sort: "importance" %}

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
        {% endif %}
</div>
