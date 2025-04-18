---
layout: project.njk
tags: 
    - Software
    - post
title: Tetris
date: 2021-03-20
summary: Recreating an all-time classic in TypeScript from scratch.
featured-img: tetris/tetris-intro.gif
---

## TL;DR

I wrote a Tetris clone in Typescript from scratch for fun. The code is messy because I never expected it to get as many features as it has.  

Play it [here](/tetris)

Code lives on [Github](https://github.com/Berenddeperend/tetris)

## Background

At around January 4th 2021 I was looking for a new programming project. I had never written a game before, but I've always been interested in 8-bit style programs. Back in 2008 when I was studying Arts and Technology I had a teacher who was trying to build Tetris in ActionScript. While I had never seen his attempt, I do remember him saying the task was too difficult for him. Fast-forward some 13 years later and I felt confident enough in my skills to give it a shot.

## Backend

I wanted to store the highscores in a database on my Raspberry Pi. For something as simple as this I'd usually go with MongoDB. But as I had no experience with relational databases, I felt this would be a nice opportunity. I chose Postgres. Massive overkill for a simple project as this, but it's what we often used my job ad the time so the experience was welcome. Learning the SQL queries to read and write some rows didn't take too long. After making a few endpoints on my RPi + Node + Expressjs server, I could use Postman to interact with it from another machine on the same network. Neat!

Now came the part I wasn't looking forward to: making the thing publicly available. I wanted to have the API accessible through [https://berendswennenhuis.nl/api](https://berendswennenhuis.nl/api), something like http://86.91.181.219 wouldn't cut it. Luckily, my friend Erik came to the rescue. After an evening of hard work, we managed to change the DNS settings to point to my local network, set up port-forwarding to route it to the RPi, and get a LetsEncrypt certificate. [https://www.berendswennenhuis.nl](https://www.berendswennenhuis.nl) succesfully routed to my RPi, I was beyond excited. About an hour later, I managed to hook up my Tetris highscore list to the RPi. It didn't take Erik long to figure out it wasn't very secure.

{% image "tetris/tetris-score-hacked.jpg", "Hacked highscore" %}

## Challenges

I had no expectations for this project at all, I just started writing some code for fun. I used plain TypeScript without any frontend framework. Things were going pretty well, and I was very happy with the progress I made.

The game had three states at this point (splash, playing, gameover) and I knew I was going to add more. Doing DOM manipulations within TS was getting tedious, so I needed something to help me out. At my job at the time I worked with Vue.js which I love, but I wanted to keep this game as lightweight as possible. Since the rest of the industry primarily uses React, this seemed like the perfect opportunity to try out Preact, the 3kB React alternative with the same API. 

Writing new components in Preact went fine, like the three-letter-input and highscore list. I knew it was time to rewrite the primary gamefiles as well. I gave it my best shot, but after two weeks of refactoring I was still breaking more than I was fixing. This was pretty demotivating, especially considering my productivity from when I was still frameworkless. As I was already learning a lot from building the new components, I decided on leaving the old components as-is. This means that the code is pretty inconsistent but I'm okay with that. I'm doing this for fun after all.

## Acknowledgements

All thoughout the project I shared my progress with my close friends Joost and Erik.

- My friend Erik helped me with setting up my Raspberry Pi to use as a server and highscore-database. This included DNS settings, port-forwarding and getting a LetsEncrypt certificate. You've been a great help, thank you!
- My ex-colleague Daniël wrote ['virtual-clock'](https://virtual-clock.js.org/), the lib I used for the game clock.
- My colleague Erik helped me to think out a strategy for validating the scores on the back-end.