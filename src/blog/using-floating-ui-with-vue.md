---
title: "Using Floating UI in Vue.js"
layout: template.njk
date: 2025-02-10
---

<div class="post-header">
    <h1 class="post-title">{{ title }}</h1>
    <p class="post-metadata">Posted on 10-02-2024</p>
</div>

Today I used the `@floating-ui/vue` package to do some intelligent DOM positioning.

I wasn't getting any errors, but the library kept on positioning my floating element to `{top: 0, left: 0}`. After multiple hours I found out what I did wrong:

- The `const {floatingStyles} = useFloating(reference, floating);` cannot happen in the `onMounted` lifecycle hook. This feels counter-intuitive, since you need to pass it two template refs (`reference` and `floating`, in this example) that won't be bound until after the `mounted` phase. Therefor makes sense to me to call the `useFloating()` function after the template refs are bound, but the lib doesn't work that way.
- You need to pass the `reference` and `floating` variables as refs, not as their values. So `useFloating(reference.value, floating.value)` doesn't work. You must use `useFloating(reference, floating)` instead.  

This is the way to go if you're using the setup hook or composition API. It might be different if you're using the options API.

Also: it's great that the library contains modules for vanilla JS, React and Vue. But some of their first-party plugins are only available for React. I wish they'd support all of their supported environments equally. HeadlessUI does this as well. 

