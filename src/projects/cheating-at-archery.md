---
layout: project.njk
tags: 
    - post
    - arduino
title: Cheating at archery
featured-img: /img/gyrobow/gyrobow-finished-side.jpg
summary: Turns out I suck at both archery and hardware.
duration: Not sure anymore, few weeks probably
posted: 01-03-2018
project-start: march 2018
---

![](/img/gyrobow/gyrobow-finished-side.jpg)


For a while I was really into archery. I came up with the idea to attach a gyroscope to my bow to see if it would help my accuracy. A first prototype with an Arduino Uno looked like this:

![](/img/gyrobow/gyrobow-wip.gif)


When you turn on the device, it shows you the angle you're pointing your bow at (up/down, not left/right).

![](/img/gyrobow/gyrobow-wip-3.jpg)


First you shoot an arrow like you normally would. All else being equal, if your arrow flies over the target, you've aimed too high. If the arrow falls short, you've aimed too low. If you take notice of the value on the screen before you shoot, you can use it as an anchor point to make adjustments to your next shot. 

That's already pretty cool, but it came with a drawback: you had to pay attention to both the screen and your target. My solution was to add a second value to the screen: the target value. You can set this target value by turning the knob. If the measured angle matches the target value, a small motor will start vibrating. This will let you match your angle to the target angle without losing focus on the bullseye.


Here are some more photos.

![](/img/gyrobow/gyrobow-finished-front.jpg)

![](/img/gyrobow/gyrobow-finished-side.jpg)

![](/img/gyrobow/gyrobow-finished-back.jpg)

![](/img/gyrobow/gyrobow-finished-action.jpg)