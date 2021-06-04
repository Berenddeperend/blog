---
layout: project.njk
tags: post
date: 2020-03-21
featured-img: /img/soapdispenser/soap-finished-thumb.gif
summary: Arduino powered, made from scrap wood and components I had laying around.
title: Hands-free soap dispenser
url: Soap dispenser
---

Inspired by some facebook post. Seemed like a simple enough project and I already had all the required hardware laying around. 

Some first prototypes:

![](/img/soapdispenser/soap-wip-1-lq.gif)

I was using the small servo motor in a pretty inefficient way so it wasn't strong enough.

Two servos:

![](/img/soapdispenser/soap-wip-2.gif)

Still not great. I ordered a slightly bigger servo and attached it:


{% image "soapdispenser/soap-finished-back.jpg", "Soap dispenser finished" %}

{% image "soapdispenser/soap-wip-2-low.jpg", "Soap dispenser finished" %}

![](/img/soapdispenser/soap-wip-fail.gif)

The servo worked but the sensor was not in a good place. I fixed it with some popsicle sticks.

{% image "soapdispenser/soap-finished-low.jpg", "Soap dispenser finished" %}

![](/img/soapdispenser/soap-finished.gif)

Success!

Used hardware: 
  - Arduino Duemilanove (Italian for "2009", so it's a pretty old one)
  - Ultrasonic distance sensor
  - S3003 Servo
  - Hot glue and scrap wood


<!-- 
 <video controls="true" allowfullscreen="true" poster="/img/soapdispenser/soap-finished.gif">
    <source src="/img/soapdispenser/soap-finished-fail.mp4" type="video/mp4">
  </video> -->
