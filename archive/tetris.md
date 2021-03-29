---
layout: layout.njk
tags: post
title: Tetris
---




Tetris


TL;DR: I wrote a Tetris clone in Typescript from scratch for fun. The code is messy because I never expected it to get as many features as it has.  

At around January 4th 2021 I was looking for a new programming project. I had never written a game before but I've always been interested in 8-bit style programs. Back in 2008 when I was studying Arts and Technology I had a teacher who was trying to build Tetris in ActionScript. While I had never seen his attempt, I do remember him saying the task was too difficult for him. As I was feeling more and more confident about my programming skills, I decided to give it a shot. 

Not expecting anything, I started out by just programming a system for the blocks and rendering a random one on the page. This was pretty simple with just two Typescript files (one for the blocks and one for the stage), without any framework. 

*video*

Soon after, I wrote some grid logic. A bit more complex but nothing I couldn't easily get working.

*video*

Things were starting to go somewhere. At this point I was extremely motivated by the quick progress I was making. I had only been working on the project for a few evenings and I knew I'd be done with all of the basic logic pretty soon. So I enlarged the scope of the project by adding a cool splash screen. 

*video*

And a game-over screen

*video*

The game had three states at this point (splash, playing, gameover) and I knew I was going to add more. Doing DOM manipulations within TS was getting tedious so I needed something to help me out. At my job at TRIMM I work with Vue.js which I love, but I wanted to keep this game as lightweight as possible. Since the rest of the industry primarily uses React, this seemed like the perfect opportunity to try out Preact, the 3kB React alternative with the same API. 

Writing new components in Preact went fine, like the three-letter-input and highscore list. I knew it was time to rewrite the primary gamefiles as well. I gave it my best shot, but after two weeks of refactoring I was still breaking more than I was fixing. This was pretty demotivating, especially considering my productivity from when I was still frameworkless. As I was already learning a lot from building the new components, I decided on leaving the old components as-is. This means that the code is pretty inconsistent but I'm okay with that. I'm doing this for fun after all.

So I went from refactoring back to producing again! Next up: a better looking UI.

*pictures before and after*

Then came the big one: an online highscore list. Up until now I saved the highscores in a localstorage, meaning they were only stored on that device. We can do better, so I was ready to take my first serious steps into backend development. 

For something as simple as this I'd usually go with MongoDB. But as I had no experience with relational databases, I felt this would be a nice opportunity. I chose Postgres. Massive overkill for a simple project as this, but it's what we often use at the office so the experience was welcome. Learning the SQL queries to read and write some rows didn't take more than a few hours. After making a few endpoints on my RPi + Node + Expressjs server, I could use Postman to interact with it from another machine on the same network. Neat!

Now came the part I wasn't looking forward to: making the thing publicly available. I wanted to have the API accessible through https://berendswennenhuis.nl/api, something like http://86.91.181.219 wouldn't cut it. Luckily, my friend Erik came to the rescue. After an evening of hard work, we managed to change the DNS settings to point to my local network, set up port-forwarding to route it to the RPi, and get get a LetsEncrypt certificate. https://www.berendswennenhuis.nl succesfully routed to my RPi, I was beyond excited. About an hour later, I managed to hook up my Tetris highscore list to the RPi.

The next morning I woke up to this:

*screenshot*

I should have known...




stuff learned:
- Configuring a redirect through DNS
- Enabling HTTPS through LetsEncrypt
- More knowledge about Linux permissions
- 




After that: touchscreen controls. There were a few people I wanted to show my project who pretty much only use their phone. I knew Tetris would 