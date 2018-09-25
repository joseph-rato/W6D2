const View = require('./ttt-view.js');
const Game = require('../solution/game.js');

$( () => {
  let $figureEl = $('figure'); 
  let game = new Game();
  let view = new View(game, $figureEl);
  view.setupBoard();
  // Your code here
  view.bindEvents();
});
