/**
 * Name: Petar Spasic
 * Date: 10/25/2023
 *
 * Here my JavaScript file that takes user input and display after user has clicked the button. 
 * It calculates the average length of strings. 
 */
"use strict";

(function() {

   window.addEventListener("load", init);

   /**
   * Calls the addEntry method after the user clicks the button
   */
   function init() {
     qs("button").addEventListener("click", addEntry);
   }

   /**
   * Prompts the user to enter name and text entry and displays it after  
   * user clicks add entry button. 
   */
   function addEntry() {
    let name = id("name").value;
    let text_entry = id("text_entry").value;
    let post = document.createElement("article");
    post.classList.add("post");
    let heading = document.createElement("h4");
    heading.textContent = "name: " + name;
    let paragraph = document.createElement("p");
    paragraph.textContent = "text_entry: " + text_entry;
    post.appendChild(heading);
    post.appendChild(paragraph);
    id("posts").appendChild(post);
    id("name").value = "";
    id("text_entry").value = "";
  }

   /**
   * Checks to see if parameter is of type String and 
   * gets the average length of strings in the list.
   * @param {String} tag Pass selector name as parameter and check if it is of type String
   * @returns {double} Returns average length of all string elements
   */
   function avgLength(tag) {
     if (typeof(tag) != "string") {
        console.log("Invalid selector type please try again");
     }
     else {
      let list = qsa(tag)
      sum = 0.0;
      for (i = 0; i < list.length; i++) {
        sum += list[i].textContent.length;
      }
      return sum/list.length;
     }
   }

   /** ------------------------------ Helper Functions  ------------------------------ */
   /**
   * Note: You may use these in your code, but remember that your code should not have
   * unused functions. Remove this comment in your own code.
   */

   /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
   function id(idName) {
     return document.getElementById(idName);
   }

   /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
   function qs(selector) {
     return document.querySelector(selector);
   }

   /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} selector - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
   function qsa(selector) {
     return document.querySelectorAll(selector);
   }

   /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
   function gen(tagName) {
     return document.createElement(tagName);
   }

})();