---
tags: 
    - Software
    - post
layout: project.njk
title: This website
summary: Documenting some of my projects on a self-hosted website.
date: 2021-05-21
featured-img: pi4.jpeg
---


I made this website because I wanted one central place to showcase some of my projects. The blog you're reading right is static HTML generated with [11ty](https://11ty.dev). I'm not using a theme, I've just slapped some CSS on it. It is hosted on a headless Raspberry Pi 4 (8GB) which is stuffed away somewhere in a cabinet in my living room:

{% image "this-website/pi4.jpg", "The computer running this website." %}

The blog is Dockerized along with some other projects (a Minecraft server, my Tetris clone, its backend, its database, and anything else I'll build in the future). One `docker-compose up` command fires up everything, which is really cool. I spent a few evenings trying to learn Traefik for my reverse proxy HTTPS needs, but honestly I had a really hard time figuring it out. [Caddy](https://caddyserver.com/) proved to be a way easier alternative, I would definitely recommend it. This stack I'm using is probably overkill for what I want to archieve. I just wanted the experience of doing it the 'right' way. Hopefully having this system in place also makes it less of a big deal to upgrade/maintain. If you're reading this, it at least means it hasn't failed yet :)

Big thanks to Erik (the one living in Norway) for helping me with some Docker and HTTPS stuff.