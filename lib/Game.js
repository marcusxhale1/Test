const inquirer = require('inquirer');
const Player = require('./Player')
const Enemy = require('./Enemy')


function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false; 
    this.enemies = [];
    this.currentEnemy;
    this.player;

}

Game.prototype.intializeGame = function() {
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('Hideko', 'Words'));
    this.enemies.push(new Enemy('Heidi', 'Actions'));
    // this creates an array of the enemies above starting at goblin[array 0]
    this.currentEnemy = this.enemies[0];
}




// this is prompting the question into node I believe
inquirer
.prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name'
})

// destructure name from the prompt object
.then(({ name }) => {
    this.player = new Player(name);

    // test the object creation
    console.log(this.currentEnemy, this.player);
  });




module.exports = Game; 