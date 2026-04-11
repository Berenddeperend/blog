---
layout: project.njk
tags: 
    - Woodworking
    - Software
    - post
date: 2025-12-30
featured-img: minitafeltje.nl/thumbnail.jpg
summary: "Building my first product, webshop, and everything that comes with it."
title: Minitafeltje.nl
url: minitafeltje

---

TL;DR:

I made a webshop selling engraved picnic tables for bunnies and chickens.

{% image "minitafeltje.nl/pip.jpeg", "Pip" %}
{% image "minitafeltje.nl/berend.jpg", "Me with a table" %}

Visit it over at <a href="www.minitafeltje.nl">www.minitafeltje.nl</a>

A recurring theme in my projects is picnic tables. I don't have a burning passion for them or anything, but one thing led to another and here I am.
Selling picnic tables on the internet.

As a recap: in 2021 I made a few picnic tables. Read about that <a href="/projects/mini-picnic-table/">here</a>.

At my day job I built a few websites where you could customize products like stickers and t-shirts.
I realized I could do this myself as well. 

The plan was to sell picnic tables as a kit (to save costs on shipping), with engraved top plates. And I'm proud to say, I did.


A lot of things had to happen.

## Designing the table for (semi) mass production

The tables needed to be both easy to assemble for the customer, and quick to fabricate for me.
So I put a lot of time into this phase. 

I designed multiple jigs to quickly cut the joints. I wrote <a href="/projects/mini-picnic-table/">one of them</a> before. Here are photos of the others.

{% image "minitafeltje.nl/jig1.jpg", "Jig" %}
{% image "minitafeltje.nl/jig2.jpg", "Jig" %}
{% image "minitafeltje.nl/jig3.jpg", "Jig" %}

With these I can create a full kit that looks like this:

{% image "minitafeltje.nl/components.jpg", "Pieces" %}
{% image "minitafeltje.nl/package.jpg", "Package" %}

With the standardized design, I could save a lot of time by creating the tables in batches.

{% image "minitafeltje.nl/assembly-line.jpg", "batch" %}
{% image "minitafeltje.nl/assembly-line-2.jpg", "batch" %}

Special shoutout to this cool joint:

{% image "minitafeltje.nl/cool-joint.jpg", "joint" %}


## Engraving

Enschede has the Fablab, a wonderful workshop where you can operate the machines yourself. 
I use their laser cutter to engrave the customer's design on the top of the plate, and a small logo on the bottom of it.


{% image "minitafeltje.nl/geefzaad-engraving.jpg", "Engraving" %}

This says 'Made in Enschede'. Also included is a serial number and the coat-of-arms of Enschede. 
{% image "minitafeltje.nl/engraving-bottom.jpg", "Engraving" %}


## Building a website

As a professional web developer, this was the easy part for me. Here are some technical choices I made:

### Nuxt frontend and backend
Nuxt is to Vue.js what Next.js is to React. I've got plenty of experience with Vue.js, this was my first time with the Nuxt metaframework. It was a very enjoyable experience, would definitely use again. Special shoutout to Nuxt Image.

### Konva canvas library
Great lib. Used to create a simple editor for clients to design their top plate. I had already used it on my day job a few times, so I could transfer those lessons learned to here.

### SQLite db
At first I wanted to try out Supabase, but they kept on annoying me with "please start paying" emails. This made me double down on 'choose boring tech'. Which brings me to my next point:

### Self hosted
The Raspberry Pi 4 I use to host the website you're reading right now has been working flawlessly for the last 5 years. I'm hosting minitafeltje.nl from there now too.

### Claude code
This project also marks the first project I've used Claude Code on. I only used it for the last 20% of the development process. It worked good enough to give me a small existential crisis regarding my profession. I might write about that later.

### Payment provider
This is my first time ever monetizing something, so I never did this before. I chose Mollie as it's Dutch. Hooking it up was easy enough, just calling a few endpoints and listening to some webhooks.
The great thing about wiring up a payment provider vs using something like Shopify is that I don't have any monthly costs.
I just pay 0.40 cents per order, which is great.

### Email service
I tried wiring up something myself but quickly realized it's not worth the hassle. I'm stuck with Mailersend's free tier.

## Shipping
Nothing special here. I bought cardboard boxes for shipping and a bunch of wood glue satchels. I throw in a couple so customers don't need to buy a full bottle of wood glue. 

{% image "minitafeltje.nl/glue.jpg", "Glue and boxes" %}


## Lessons learned

Time for some reflection. I'm very proud of all the work I've put into the project and I genuinely think I've created a beautiful product.
I pride myself in my track record of finishing what I start, and this one is another win under the belt.
Unfortunately I've not sold any tables yet outside my group of friends.
Of course I'm grateful for their purchases but they don't *really* count. It's like your grandma calling you handsome.

Two reasons for this I think:

- It's too expensive. I'm selling my tables as a kit for 60 euros. That's the full price including shipping and engraving. I know it's too much but I'm still putting so much work into each single table that I can't get myself to sell them any cheaper than that. So my next efforts will go into reducing the work needed to create each table, so I can lower the price.
- Lack of marketing. I've barely done any marketing. And I'm not naive, I know just releasing something won't make people magically find out about it. But I refuse to use ads or influencers so my options are kinda limited.

But I'm not too bothered by the lack of financial success. The real win was the energy this project gave me. 
I'm at my happiest when I can lose myself in a project and that's definitely what happened here. 
And I've got the feeling that the experience I've gotten from this project will compound to something much bigger in the future.

Thank you for reading.
