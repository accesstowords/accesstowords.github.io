---
title: Sectors
subtitle: Elevating Compliance and Customer Perception
layout: blog-groups
---

<!-- Service Start -->
<div class="section winbiz-service-section section-padding">
  <div class="container">
      <!-- Service Wrap Start -->
      <div class="service-grid-wrap">
          <div class="row">         
            {% for sector in site.data.sectors %}
              <div class="col-lg-4 col-md-6">
                  <!-- Service Item Start -->
                  <div class="service-item-03">
                      <div class="service-img">
                          <a {% if sector.link %}href='{{ sector.link }}'{% endif %} {% if sector.target %}target='{{ sector.target }}'{% endif %}><img src="{{ sector.hero }}" alt="{{ sector.logo }}"></a>
                      </div>
                      <div class="service-content">
                          <div class="service-text">
                              <h3 class="title"><a {% if sector.link %}href='{{ sector.link }}'{% endif %} {% if sector.target %}target='{{ sector.target }}'{% endif %}>{{ sector.name }}</a></h3>
                              <p>{{sector.description}} </p>
                          </div>
                          <div class="service-link">
                              <a class="link-more" {% if sector.link %}href='{{ sector.link }}'{% endif %} {% if sector.target %}target='{{ sector.target }}'{% endif %}><i class="flaticon-right-arrow-2"></i></a>
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