---
layout: page
title: 연구
permalink: /research/
lang: ko
lang_alt_url: /en/research/
nav: true
nav_order: 2
---

<div class="project">
<!-- Display projects without categories -->

{% assign sorted_projects = site.research | sort: "importance" %}

  <!-- Generate cards for each project -->

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
