---
layout: home
title: "Accessible Communications at Scale: Sign Language, Easy-Read, Spoken Word, International Languages"
description: Our platform supports your ambition to create a fully inclusive environment, where more people are included and feel welcome. We can help you to maximise customer numbers, deepen and broaden engagement, and efficiently extend the value of your communications to increase ROI and profitability.
---
<div class="section winbiz-hero-section-3">
            <div class="hero-img-3">
                <img src="/images/cassie.png" alt="Picture of a sign language ai avatar named cassie">
            </div>
            <div class="container">
                <div class="row align-items-left">
                    <div class="col-lg-6">
                        <!-- Hero Content Start -->
                        <div class="hero-content">
                            <h1 class="title aos-init aos-animate" data-aos="fade-up" data-aos-delay="800">Accessible Communications</h1>
                            <p class="hero-text">Reach 4 million extra customers</p>
                            <div class="hero-btn aos-init aos-animate" data-aos="fade-up" data-aos-delay="1000">
                                <a class="btn" href="contact.html">Let’s talk about it <i class="fas fa-angle-right"></i></a>
                            </div>
                        </div>
                        <!-- Hero Content End -->
                    </div>
                </div>
                <!-- Features Start -->
                <div class="winbiz-features-section">
                    <!-- Features Wrap Start -->
                    <div class="features-wrap">
                        <div class="row">    
                        {%- for sector in site.data.sectors %}
                            <div class="col-lg-4 col-md-6">
                                <!-- Features Item Start-->
                                <div class="features-item-02">
                                    <img src = '{{ sector.icon }}' class = '' style="width:30%;" alt="{{ sector.sectors }}"/>
                                    <div class="features-content">
                                        <h3 class="title">{{ sector.name }}</h3>
                                        <p><b>{{ sector.sectors }}</b> {{ sector.description | markdownify }}</p>
                                        <a class="btn" href="{{ sector.link }}">Learn More<i class="fas fa-angle-right"></i></a>
                                    </div>
                                </div>
                                <!-- Features Item End-->
                            </div>
                                {%- endfor %}
                        </div>
                    </div>
                    <!-- Features Wrap End -->
                </div>
                <!-- Features End -->
            </div>
        </div>

<br />
<div class="container">
    <figure id="videoContainer" data-fullscreen="false">
        <video
        volume="0.0"
        width="100%"
        id="video"
        preload="auto"
        disablePictureInPicture
        controlslist="nodownload"
        autoplay
        muted
        loop
        >
            <source
                src="https://cdn.api.video/vod/vi3qSVQHEagw0DMECuyUs9V/mp4/1080/source.mp4"
                type="video/mp4"
                aria-labelledby="title"
                aria-describedby="transcript"
            >
            <iframe src="https://embed.api.video/vod/vi3qSVQHEagw0DMECuyUs9V" width="100%" frameborder="0" scrolling="no" allowfullscreen="true">
            </iframe>
        </video>
    </figure>
</div>

<!-- Brand Logo Start -->
<div class="section">
    <div class="container">
        <h2 class="title brandintro">We are trusted by the world’s leading companies and organisations</h2>
        <div class="brand-slider">
            {%- for testimonial in site.data.testimonials %}
                <a {% if testimonial.link %} href="{{ testimonial.link }}" target="_blank" {% endif %}>
                    <div>
                        <img src="{{ testimonial.logo }}" class="service-icon" alt="{{ testimonial.testimonial }}" style="padding-left: 25px; padding-right: 25px;">
                        <h4 style="padding-left: 25px; padding-right: 25px;"> {{ testimonial.testimonial }} </h4>
                        <h4 style="padding-left: 25px; padding-right: 25px;"> {{ testimonial.sectors }} </h4>
                    </div>
                </a>
            {%- endfor %}
        </div>
    </div>
</div>
{%- include faq.html %}
<div class="winbiz-about-sectio-4 section section-padding-02">
            <div class="container">
                <div class="about-wrap">
                    <div class="row g-0">
                        <div class="col-lg-7">
                            <!-- About Image Start-->
                            <div class="about-img-wrap">
                                <div class="row g-0">
                                    <div class="container">
  <figure id="videoContainer" data-fullscreen="false">
    <video
      volume="0.0"
      width="100%"
      id="video"
      preload="auto"
      disablePictureInPicture
      controlslist="nodownload"
      autoplay
      muted
      loop
    >
      <source
        src="https://cdn.api.video/vod/vi13ZkgJz2BPwKl7611d1CuY/mp4/1080/source.mp4"
        type="video/mp4"
        aria-labelledby="title"
        aria-describedby="transcript"
      >
      <iframe src="https://embed.api.video/vod/vi13ZkgJz2BPwKl7611d1CuY" width="100%" frameborder="0" scrolling="no" allowfullscreen="true">
      </iframe>
    </video>
  </figure>
</div>
                                </div>
                            </div>
                            <!-- About Image End-->
                        </div>
                        <div class="col-lg-5">
                            <!-- About Content Start-->
                            <div class="about-content">

                                <div class="section-title">
                                    <h3 class="sub-title sub-title2">Purpose</h3>
                                    <h2 class="title">Create an inclusive environment</h2>
                                </div>
                                <p class="text">Our platform supports your ambition to create a fully inclusive environment, where more people are included and feel welcome. We can help you to maximise customer numbers, deepen and broaden engagement, and efficiently extend the value of your communications to increase ROI and profitability. Our accessibility products and services enable you to deliver equality and access of information and services to the d/Deaf community.
</p>
</div>
</div>
        <!-- Service Single Start -->
        <div class="corpix-service-single section section-padding">
            <div class="container">
                <div class="service-single-wrap">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4">
                            <!-- Service Sidebar Start -->
                            <div class="service-sidebar">
                                <!-- Service Widget Start -->
                                <div class="service-widget">
                                    <div class="service-category-list">
                                        <ul>
                                        {%- for solution in site.data.solutions %}
                                        <li><a href="{{solution.link}}">{{solution.name}}<i class="fas fa-angle-right"></i></a><p>{{solution.summary}}</p></li>
                                        {%- endfor %}
                                        </ul>
                                    </div>
                                </div>
                                <!-- Service Widget End -->
                                <div class="service-widget">
                                </div>
                                <!-- Service Widget Start -->
                                <div class="service-widget">
                                    <!-- Cta Banner Start-->
                                    <div class="cta-banner">
                                    </div>
                                    <!-- Cta Banner End-->
                                </div>
                                <!-- Service Widget End -->
                            </div>
                            <!-- Service Sidebar End -->
                        </div>
                        <div class="col-xl-8 col-lg-8">
                            <!-- Service Single Content Start -->
                            <div class="service-single-content">
                                <h3 class="title">Accessible content enables bigger audiences: your content goes further, lasts longer and finds a wider audience</h3>
                                <p class="text">When your content is designed with accessibility in mind, it becomes a powerful tool that resonates with a broader spectrum of individuals. Not only does it ensure your message reaches people with diverse abilities, but it also has the potential to transcend time, remaining relevant and impactful for longer periods. By making your content accessible, you unlock the door to a wider audience, fostering inclusivity and maximizing the lasting impact of your communication efforts.

Embracing accessible content amplifies the concept of the "long tail" effect, where your content's cumulative value extends far beyond its initial release. By making your material accessible to individuals who may have previously been excluded, you create a ripple effect of engagement and sharing. This extends the lifespan of your content, ensuring it continues to resonate and deliver value over time. As your accessible content gains traction, it contributes to a lasting legacy, building a stronger connection with your audience and establishing your organisation as a champion of inclusivity and innovation.</p>
                                                            </div>
                            <!-- Service Single Content End -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Service Single End -->
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script> -->

<script>
    var slider = tns({
      container: '.faqslider',
      items: 1,
      nav: false,
      prevButton: '.testimonial-button-prev',
      nextButton: '.testimonial-button-next',
      responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      768: {
        gutter: 30,
        items: 2
      },
    }
    });
  </script>
  <script>
    var slider = tns({
      container: '.brand-slider',
      items: 2,
      autoplay: true,
      responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      768: {
        gutter: 30,
        items: 3
      },
      1024: {
        gutter: 30,
        items: 6
      },
    }
    });
  </script>
