---
layout: project.njk
tags: 
    - Software
    - post
title: Co-op nonograms
date: 2022-11-06
summary: Create and solve nonograms with your friends in real-time.
featured-img: tetris/tetris-intro.gif
url: nonogram
---


Play it [here](/nonogram).


## Background

In January of 2021 I wrote Tetris in Typescript. This was one of the most rewarding experiences I've ever had in programming. So in trying to chase the same high I wanted to write another game this year. [Nonograms](https://en.wikipedia.org/wiki/Nonogram) are cool and websockets are also cool so I wrote Nonogram With Friends. 

When I initially created Tetris without a framework I quickly realized how tedious it is to manipulate the DOM the old-fashioned way. That's why I wrote the frontend in Vue3, a framework I've had a few years of experience with. 


## Lessons learned

It took me a LOT of time to get from having all of the services working locally, to having them all deployed in Docker behind a reverse-proxy. 

- In the future I'd like to have all the services connected and working as early in the project as possible. Integration hell is real and tackling it when the codebase is still small is something I'd like to try next time. This would also allow me to publish my work earlier, which will probably work as a great motivator.
- Don't needlessly seperate the front- and backend into two repositories. My backend runs on the same Raspberry Pi that serves the frontend, which would enable me to serve it as a monolith. Both the front- and backend are written in Typescript and it would have been really nice to reuse some functions and types. Also, no CORS.
- Make touchscreen support a first-class citizen instead of an afterthought. The types of games I've been making so far don't translate very well to mobile in my opinion, but I want to make something my mom would be able to play. 
