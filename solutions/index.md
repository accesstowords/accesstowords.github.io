---
title: Solutions
subtitle: Transforming Customer Communications
layout: blog-groups
---


<!-- Service Start -->
<div class="section winbiz-service-section section-padding">
  <div class="container">
      <!-- Service Wrap Start -->
      <div class="service-grid-wrap">
          <div class="row">         
            {% for solution in site.data.solutions %}
              <div class="col-lg-4 col-md-6">
                  <!-- Service Item Start -->
                  <div class="service-item-03">
                      <div class="service-img">
                          <a {% if solution.link %}href='{{ solution.link }}'{% endif %} {% if solution.target %}target='{{ solution.target }}'{% endif %}><img src="{{ solution.hero }}" alt="{{ solution.name }}"></a>
                      </div>
                      <div class="service-content">
                          <div class="service-text">
                              <h3 class="title"><a {% if solution.link %}href='{{ solution.link }}'{% endif %} {% if solution.target %}target='{{ solution.target }}'{% endif %}>{{ solution.name }}</a></h3>
                              <p>{{ solution.summary }}</p>
                          </div>
                          <div class="service-link">
                              <a class="link-more" {% if solution.link %}href='{{ solution.link }}'{% endif %} {% if solution.target %}target='{{ solution.target }}'{% endif %}><i class="flaticon-right-arrow-2"></i></a>
                          </div>
                      </div>
                  </div>
                  <!-- Service Item End -->
              </div>
              {% endfor %}
          </div>
      </div>
      <!-- Service Wrap End -->
  </div>
</div>
<!-- Service End -->