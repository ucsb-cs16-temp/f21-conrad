---
layout: page
title: Labs
description: Listing of programming assignments
---

# Labs

{% assign real_labs = site.labs | where: 'layout', 'lab' %}

| Lab | Title |
|-----|-------|
{% for lab in real_labs %}| [{{lab.num}}]({{lab.url | relative_url }}) | {{ lab.desc }} |
{% endfor %}
