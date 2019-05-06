/**
 * Skipping a loop
 */
var sandwiches = ["turkey", "tuna", "ham", "chicken salad", "pb&j"];

for (var i = 0; i < sandwiches.length; i++) {
  // Skip to the next in the loop
  if (sandwiches[i] === "ham") continue;

  //console.log(sandwiches[i]);
}

/**
 * Breaking a loop
 */
var lunch = {
  sandwich: "ham",
  snack: "chips",
  drink: "soda",
  desert: "cookie",
  guests: 3,
  alcohol: false
};

for (var key in lunch) {
  if (lunch.hasOwnProperty(key)) {
    if (key === "drink") break;
    console.log(key + ": " + lunch[key]);
  }
}
