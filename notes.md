Purchase Confirmation
Thank you for your purchase!

Payment: 36419
Payment Status: Complete
Payment Method: PayPal
Date: May 6, 2019
Discount(s): HELLOSPAIN
Subtotal: $799.00
Total Price:	$335.58
Products
Name Price
Vanilla JS Academy – May 2019
Student Login
\$335.58

---

How to figure out percentages?
Convert the tip as a percentage into the tip as a decimal so that we can use it in our math. (20% of 80.50)
20/100 = .2
Get the tip amount (in dollars) for the meal.
$80.50 * .2 = $16.10

---

Polyfills
Add your polyfills before any of your other code (globally, outside of any functions or other scripts) and you’re good to go.

/\*\*

- Array.prototype.forEach() polyfill
- @author Chris Ferdinandi
- @license MIT
  \*/
  if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArg) {
  thisArg = thisArg || window;
  for (var i = 0; i < this.length; i++) {
  callback.call(thisArg, this[i], i, this);
  }
  };
  }

// The rest of your scripts...
To make your life easier, you can also use a polyfill service like polyfill.io, which detects the browser being used and sends back only the polyfills that person’s browser needs.

On the latest Chrome, it sends nothing, while IE7 gets about 15kb of code (minified and gzipped).

<script src="https://polyfill.io/v3/polyfill.min.js"></script>
