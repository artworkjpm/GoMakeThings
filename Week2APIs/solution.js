//
// Variables
//

var app = document.querySelector("#app");
var apiKey = "658cf0e4f41d48a29fd424f03ea549e8";
var sections = ["technology", "science", "magazine"];
var articleCount = 3;

//
// Methods
//

/*
 * Make a request to the NYT API
 * @param  {String} section The section to request articles from
 * @return {Promise}        The XHR request as a Promise
 */
var makeRequest = function(section) {
  // Setup the request URL
  var url =
    "https://api.nytimes.com/svc/topstories/v2/" +
    section +
    ".json?api-key=" +
    apiKey;

  // Create the XHR request
  var request = new XMLHttpRequest();

  // Return it as a Promise
  return new Promise(function(resolve, reject) {
    // Setup our listener to process compeleted requests
    request.onreadystatechange = function() {
      // Only run if the request is complete
      if (request.readyState !== 4) return;

      // Process the response
      if (request.status >= 200 && request.status < 300) {
        // If successful
        resolve(request);
      } else {
        // If failed
        reject({
          status: request.status,
          statusText: request.statusText
        });
      }
    };

    // Setup our HTTP request
    request.open("GET", url, true);

    // Send the request
    request.send();
  });
};

/*
 * Render article list elements from the articles object
 * @param  {Object} articles The articles and article data
 * @return {String}          The article markup as a string
 */
var renderArticles = function(articles) {
  var content = "";
  articles.forEach(function(article) {
    content +=
      "<li>" +
      '<strong><a href="' +
      article.url +
      '">' +
      article.title +
      "</a></strong><br>" +
      '<span class="text-muted text-small">' +
      article.byline +
      "</span><br>" +
      '<span class="text-small">' +
      article.abstract +
      "</span>" +
      "</li>";
  });
  return content;
};

/*
 * Render a section of articles
 * @param  {Object} articles The article data for the section
 * @param  {String} title    The title of the section
 */
var renderSection = function(articles, title) {
  console.log(articles);
  var section = document.createElement("div");
  section.id = "section-" + section;
  section.innerHTML =
    '<h2 class="title-case">' +
    title +
    "</h2>" +
    "<ol>" +
    renderArticles(articles) +
    "</ol>";
  app.append(section);
};

/**
 * Make an API request for each section
 */
var getArticles = function() {
  sections.forEach(function(section, index) {
    // Make the request
    makeRequest(section)
      .then(function(data) {
        // Convert the data into JSON and return just the articles
        return JSON.parse(data.responseText).results;
      })
      .then(function(articles) {
        // Reduce the array to a set number of articles
        return articles.slice(0, articleCount);
      })
      .then(function(articles) {
        // Render the section
        renderSection(articles, section);
      });
  });
};

//
// Inits and Event Listeners
//

getArticles();
