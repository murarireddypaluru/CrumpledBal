# CrumpledBal — Crumpled Paper Toss (With Image Assets)

A "toss the crumpled paper into the dustbin" game. Launch a ball of paper across the room
and try to land it in the bin. This version uses **image assets** (a paper texture and a
green dustbin sprite).

## What it is

A paper ball sits on the left. Press the **UP arrow** to launch it up and to the right in an
arc toward a dustbin drawn from a sprite image on the right. The paper (`paper.png`) and the
bin (`dustbingreen.png`) are rendered as images/sprites.

## Built with

- [p5.js](https://p5js.org/) + [p5.play](https://p5play.org/) — canvas, sprites, rendering, input
- [matter.js](https://brm.io/matter-js/) — 2D physics (paper ball, ground, bin walls)

## How to run

This is a static site — no build step. Because it loads images, use a local server (opening
the file directly may fail to load the assets in some browsers).

- **Recommended (static server):** from the project folder run one of:
  - `python3 -m http.server 8000` then visit `http://localhost:8000`
  - `npx serve`
- **GitHub Pages:** enable Pages for the branch in the repository settings and open the
  published URL.
- **Simplest:** open `index.html` directly in a browser (asset loading may be blocked).

## Controls

- **UP arrow** — launches the paper ball toward the dustbin.

## Note

The ball's physics body is stored on the `Ball` instance (`this.body`) and referenced as
`ball.body` in `keyPressed()`, so the UP-arrow launch applies its force to the correct body.
