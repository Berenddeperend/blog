---
layout: project.njk
tags: 
    - Software
    - post
title: Nonogram With Friends
url: nonogram
date: 2023-01-08
updated: 2023-01-21
summary: Sudokus too hard for you? Play Nonograms. Still too hard? Invite friends to help out.
featured-img: nonogram/thumbnail.gif
---

Play it <a href="/nonogram" target="_blank">here</a>.

<video autoplay loop muted playsinline style="width:100%; max-width:300px;">
  <source src="/video/nonogram-demo-speedup.mp4" type="video/mp4">
</video>

## Features

- Real-time co-op multiplayer over websockets
- No login or other shenanigans necessary, just pick a nickname and play
- Only has puzzles that are solvable without guessing/backtracking
- Create new puzzles by drawing pixel art
- Multiple input methods (mouse, keyboard, touch)
- Auto x-es for better quality of life
- A nice animation on puzzle clear for that extra dopamine boost

## Background
In January 2021 I wrote Tetris in Typescript. This was one of the most rewarding experiences I've ever had in programming. So in trying to chase the same high I wanted to write another game this year. <a href="https://en.wikipedia.org/wiki/Nonogram" target="_blank">Nonograms</a> are cool and websockets are also cool so I wrote Nonogram With Friends.
When I initially created Tetris without a framework I quickly realized how tedious it is to manipulate the DOM the old-fashioned way. That's why I wrote the frontend in Vue.js, a framework I've had a few years of experience with.

## Improvement opportunities

- The backend doesn't resolve multiple simultaneous inputs correctly, causing inputs to get lost. The more active players, the bigger the problem becomes. For now I ingeniously solved this problem by not having any online popularity 👈😎👈
- An animation when successfully clearing a row or column.

## Feature ideas

- A poll where you can vote on which of three puzzles to play next (showing only the puzzle title, so no spoilers)

## Omissions

- No chat system. Want to communicate? Aggressively point your cursor to the square you have an opinion about. Have others figure what you mean.
- You can't place X-es on mobile yet. The solution proposed above works here as well. 

<video  autoplay loop muted playsinline>
  <source src="/video/picross-agression-converted.mp4" type="video/mp4">
</video>

- No private games or lobbies. We're all in this together!


## Lessons learned
- It took me a LOT of time to get from having all the services working locally, to having them all deployed in Docker behind a reverse-proxy. In the future I'd like to have all the services connected and working as early in the project as possible. Integration hell is real and tackling it when the codebase is still small is something I'd like to try next time. This would also allow me to publish my work earlier, which will probably work as a great motivator.
- Don't needlessly separate the front- and backend into two repositories. My backend runs on the same Raspberry Pi that serves the frontend, which would enable me to serve it as a monolith. Both the front- and backend are written in Typescript and it would have been really nice to reuse some functions and types. Also, no CORS.
- Make touchscreen support a first-class citizen instead of an afterthought. The types of games I've been making so far don't translate very well to mobile in my opinion, but I want to make something my mom would be able to play.
- While Vue.js is a great framework for making UIs, I wouldn't write game logic in it again. Using computed properties for the cells is convenient but every time you fill in one cell, 99 cells needlessly execute code as well.

## Acknowledgements
- <a href="https://github.com/ThomasR/nonogram-solver" target="_blank">ThomasR's nonogram solver</a>. I used this to validate user-generated puzzles.
