const fs = require('fs');
const MarkdownIt = require('markdown-it');

const tetrisMD = fs.readFileSync('./tetris.md', 'utf8');
const md = new MarkdownIt();
const result = md.render(tetrisMD);

console.log('result: ', result);