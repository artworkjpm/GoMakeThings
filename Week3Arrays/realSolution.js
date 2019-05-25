//
// Variables
//
var app = document.querySelector("#app"); // The app
var total;

// The monsters and socks
var monsters = ["sock!", "monster1.svg", "monster2.svg", "monster3.svg", "monster4.svg", "monster5.svg", "monster6.svg", "monster7.svg", "monster8.svg", "monster9.svg", "monster10.svg", "monster11.svg"];

//
// Methods
//
/**
 * Randomly sorts an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
var shuffle = function(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};
/**
 * Create the grid of doors with monsters behind them
 * @param  {Array} monsters The monster data
 * @return {String}         The markup
 */
var getMarkup = function(monsters) {
  var markup = "";
  monsters.forEach(function(monster, index) {
    markup += '<div class="grid" data-monster="' + monster + '">' + '<button class="btn-unstyled"><img alt="Click Me" src="door.svg"></button>' + "</div>";
  });
  return markup;
};
/**
 * Update the total number of doors opened so far
 */
var updateTotal = function() {
  total = total - 1;
  if (total < 2) {
    renderWin();
  }
};
/**
 * Show a success message if the player finds all of the monsters
 */
var renderWin = function() {
  app.innerHTML = '<img class="img-full" alt="" src="https://media.giphy.com/media/1242bJFCbb3FxC/giphy.gif">' + "<h2>You won!</h2>" + "<p>You found all of your friends. Congrats!</p>" + '<p><button class="btn" data-monster-play-again>Play Again</button></p>';
};
/**
 * Show a failure message if the player finds a sock
 */
renderLoss = function() {
  app.innerHTML = '<img class="img-full" alt="" src="https://media.giphy.com/media/13zUNhE9WZspMc/giphy.gif">' + "<h2>You found a sock!</h2>" + '<p><button class="btn" data-monster-play-again>Play Again</button></p>';
};
/**
 * Render the initial app layout
 */
var renderApp = function() {
  // Create a grid layout
  app.classList.add("row");
  // Variables
  var randomMonsters = shuffle(monsters);
  var markup = getMarkup(randomMonsters);
  // Add monsters to the app
  app.innerHTML = markup;
  // Reset total
  total = monsters.length;
};
/**
 * Show an individual monster after a door is selected
 * @param  {Node} monster The node with the door and monster
 */
var renderMonster = function(monster) {
  // Get monster img
  var monsterImg = monster.getAttribute("data-monster");
  if (!monsterImg) return;
  // Check if a sock
  if (monsterImg === "sock!") {
    renderLoss();
  }
  // Show the hidden monster
  monster.innerHTML = '<img alt="' + monsterImg.replace(".svg", "") + '" src="' + monsterImg + '">';
  // Remove the data attribute
  monster.removeAttribute("data-monster");
  // Update the total
  updateTotal();
};
/**
 * Handle click events
 * @param  {Event} event The click event
 */
var clickHandler = function(event) {
  // If clicked element was a monster
  var monster = event.target.closest("[data-monster]");
  if (monster) {
    // Show the monster
    renderMonster(monster);
  }
  // If clicked element was the "Play Again" button
  if (event.target.matches("[data-monster-play-again]")) {
    // Reset the game
    renderApp();
  }
};
//
// Inits and Event Listeners
//
renderApp();
document.addEventListener("click", clickHandler, false);
