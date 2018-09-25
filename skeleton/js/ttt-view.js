class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {
    
      $('ul').on('click', 'li', e => {
        const val = $(e.currentTarget).data('cord');
        // debugger;
        this.game.playMove(val);
        this.makeMove($(e.currentTarget));
        if (this.game.winner()) {
          $('ul').off('click');
        }
      });

  }

  makeMove($square) {
    $square.attr('id', 'move');
    let mark = this.game.currentPlayer;
    $square.text(mark);
    if (mark === 'o') {
      $square.attr('style', 'color:red');
    } else {
      $square.attr('style', 'color:blue');
    }
    if (this.game.isOver()) {
      
      if (this.game.winner()) {
        
        return alert(`Player ${this.game.currentPlayer} has won!`);
      } else {
        return alert(`NO ONE WINS`);
      }
    }
  }

  setupBoard() {
    const $grid = $('<ul></ul>');
    for (let i = 0; i < 9; i++) {
      let lis = $('<li></li>');
      lis.data('cord', [(i % 3), Math.floor(i / 3)]);
      $grid.append(lis);
    }
    this.$el.append($grid);
    return this.$el; 
  }
}

module.exports = View;
