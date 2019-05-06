\*A for...in loop is similar to a for loop, but used to loop through **_objects_**
for (var key in lunch) {
if (lunch.hasOwnProperty(key)) {
console.log(key); // key
console.log(lunch[key]); // value
}
}
\*ES6 introduced a new forEach() method for looping over **_ARRAYS_**.
The first argument is the current item in the loop. The second is the current index in the array.
var sandwiches = [
'tuna',
'ham',
'turkey',
'pb&j'
];

sandwiches.forEach(function (sandwich, index) {
console.log(index) // index
console.log(sandwich) // value
});

// returns 0, tuna, 1, ham, 2, turkey, 3, pb&j

\*PROBLEMS WITH querySelectorAll
You can convert NodeLists into Arrays with the Array.from() method and use Array.forEach() instead.

Array.from(document.querySelectorAll('.sandwiches')).forEach(function (sandwich, index) {
console.log(sandwich.textContent);
});
Alternatively, you can use the call() method to apply Array.forEach() to non-array collections.

Array.prototype.forEach.call(document.querySelectorAll('.sandwiches'), function (sandwich, index) {
console.log(sandwich.textContent);
});

\*focus event:
Setting useCapture to true allows you to take advantage of event bubbling for events that otherwise don’t support it.

// Listen for all focus events in the document
document.addEventListener('focus', function (event) {
// Run functions whenever an element in the document comes into focus
}, true);
