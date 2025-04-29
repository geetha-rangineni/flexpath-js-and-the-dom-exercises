/*
Exercise 1: Accessing Elements with getElementById

Description: 

Select the element with the ID 'main-title' and change its text content 
to "Welcome to the DOM Manipulation Page".
*/
const mainTitle = document.getElementById("main-title");
console.log(mainTitle);
mainTitle.textContent = "Welcome to the DOM Manipulation Page";

 let placeholder = `Delete this 
									block 
									and 
									code 
									here`;

console.log("Making a change!"); 

/*
Exercise 2: Accessing Elements with querySelector

Description: 

Use querySelector to select the first <p> element with the 
class 'intro-text' and change its color to blue.
*/

const introParagraph = document.querySelector(".intro-text");
introParagraph.style.color = "blue";


placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 3: Accessing Multiple Elements with querySelectorAll

Description: 

Use querySelectorAll to select all elements with the class 'article-text' and 
set their font size to 18px.
*/

const articleParagraphs = document.querySelectorAll(".article-text");
articleParagraphs.forEach((paragraph) => {
  paragraph.style.fontSize = "18px";
});

/*
Exercise 4: Navigating the DOM Tree

Description: 

Select the element with ID 'introduction' and access its parent node. 
Log the parent node's tag name to the console.
*/

const introSection = document.getElementById("introduction");
const parentNode = introSection.parentNode;
console.log("Parent Node Tag:", parentNode.tagName);

/*
Exercise 5: Accessing Child Nodes

Description: 

Select the <ul> with ID 'item-list' and log the number of 
its child elements to the console.
*/
const itemList = document.getElementById("item-list");
console.log("Number of Child Elements:", itemList.children.length);

/*
Exercise 6: Updating Inner HTML

Description: 

Change the inner HTML of the element with ID 'introduction' to 
include a new paragraph saying "This content has been updated!".
*/

// Exercise 6: Update innerHTML of the #introduction section
// Exercise 6: Update innerHTML of the #introduction section
introSection.innerHTML = `
  <h2>Introduction</h2>
  <p class="intro-text">This content has been updated!</p>
  <img id="main-image" src="image.png" alt="Image 1">
`;




/*
Exercise 7: Changing Attributes with setAttribute

Description: 

Assume there's an image with ID 'main-image' in your HTML. 
Change its src attribute to point "image2.png".
*/

const mainImage = document.getElementById("main-image");
mainImage.setAttribute("src", "image2.png");

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

/*
Exercise 8: Adding an Event Listener

Description: 

Add an event listener to the button with ID 'alert-button' that 
shows an alert with the message "Button Clicked!" when clicked.
*/

const alertButton = document.getElementById("alert-button");

alertButton.addEventListener("click", () => {
  alert("Button Clicked!");
});


/*
Exercise 9: Removing an Event Listener

Description: 

Remove the code from Exercise 8.

In this file, add an event listener to the button with ID 'alert-button' that 
shows an alert when clicked. 

Then, remove the event listener so that clicking the button no longer 
shows the alert after 5 seconds.
*/

function showAlert() {
	alert("Button Clicked!");
  }
  alertButton.addEventListener("click", showAlert);
  setTimeout(() => {
	alertButton.removeEventListener("click", showAlert);
	console.log("Alert listener removed after 5 seconds.");
  }, 5000);
/*
Exercise 10: Handling Keyboard Events

Description: 

Add an event listener to the document that logs the 
key and code of any key pressed by the user.
*/

document.addEventListener("keydown", (event) => {
	console.log(`Key pressed: ${event.key}, Code: ${event.code}`);
  });


/*
Exercise 11: Event Propagation

Description: 

Add click event listeners to the <section> with ID 'interactive' and to 
the <button> with ID 'color-button'.

In each event handler, log a message indicating which element was clicked. 

Observe event bubbling.
*/


const interactiveSection = document.getElementById("interactive");
const colorButton = document.getElementById("color-button");


interactiveSection.addEventListener("click", () => {
  console.log("Section #interactive was clicked");
});
n
colorButton.addEventListener("click", (event) => {
  console.log("Button #color-button was clicked");

  
});

/*
Exercise 12: Stopping Event Propagation

Description: 

Modify the previous exercise to prevent the click event on 
the button from bubbling up to the section.
*/

colorButton.addEventListener("click", (event) => {
	event.stopPropagation(); 
	console.log("Button #color-button was clicked");
  });

/*
Exercise 13: Using console.log for Debugging

Description: 

Inside the event listener for the color-button, 
log the current background color of the button before changing 
it to light green.
*/

colorButton.addEventListener("click", function () {
	console.log("Current background color:", colorButton.style.backgroundColor);
	colorButton.style.backgroundColor = "lightgreen";
  });

  
/*
Exercise 14: Creating and Appending New Elements

Description: 

Create a new <li> element with the text "Item 4" and append it to 
the <ul> with ID 'item-list'.
*/

const newItem = document.createElement("li");
newItem.textContent = "Item 4";
itemList.appendChild(newItem);

/*
Exercise 15: Removing Elements from the DOM

Description: 

Remove the first <li> element from the <ul> with ID 'item-list'.
*/

const firstItem = itemList.querySelector("li");
firstItem.remove();


/*
Exercise 16: Using classList.add

Description: 

Add a class 'highlight' to all <p> elements inside the 
section with ID 'content'.
*/

onst contentSection = document.getElementById("content");
const paragraphs = contentSection.querySelectorAll("p");

paragraphs.forEach(function (p) {
  p.classList.add("highlight");
});

/*
Exercise 17: Using classList.toggle

Description: 

Add a click event listener to the button with ID 'color-button' that 
toggles the class 'active' on itself.
*/

colorButton.addEventListener("click", function () {
	colorButton.classList.toggle("active");
  });

/*
Exercise 18: Preventing Default Behavior

Description: 

Add a submit event listener to the form with ID 'input-form' that 
prevents the form from submitting and logs the input value to the console.
*/

const inputForm = document.getElementById("input-form");
inputForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputText = document.getElementById("input-text").value;
  console.log("Form submitted with:", inputText);
});

/*
Exercise 19: Simple Drag and Drop

Description: 

Make the element with ID 'drag-source' draggable and implement 
drag and drop functionality to move it to the element with ID 'drop-target'.
*/


const dragSource = document.getElementById("drag-source");
const dropTarget = document.getElementById("drop-target");

dragSource.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text/plain", event.target.id);
});

dropTarget.addEventListener("dragover", function (event) {
  event.preventDefault();
});

dropTarget.addEventListener("drop", function (event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(data);
  dropTarget.appendChild(draggedElement);
});



/*
Exercise 20: Using dataTransfer in Drag and Drop

Description: 

Use event.dataTransfer to pass custom data during the drag and drop operation 
in the previous exercise. 

For example, pass a message and log it when the drop occurs.
*/

dragSource.addEventListener("dragstart", function (event) {
	event.dataTransfer.setData("text/plain", "This is custom data");
  });
  
  dropTarget.addEventListener("drop", function (event) {
	event.preventDefault();
	const data = event.dataTransfer.getData("text/plain");
	console.log("Dropped data:", data);
	dropTarget.appendChild(dragSource);
  });
  


/*
Exercise 21: Cloning Nodes

Description: 

Clone the element with ID 'main-title' and 
append the clone to the <footer> element.
*/

const mainTitleClone = mainTitle.cloneNode(true);
const footer = document.querySelector("footer");
footer.appendChild(mainTitleClone);



/*
Exercise 22: Modifying Styles with JavaScript

Description: 

Change the background color of the <body> when the 
user moves the mouse over the <header> element.
*/

const header = document.querySelector("header");

header.addEventListener("mouseover", function () {
  document.body.style.backgroundColor = "red";
});

header.addEventListener("mouseout", function () {
  document.body.style.backgroundColor = "";
});
/*
Exercise 23: Debouncing Function Calls

Description: 

Implement a debounced resize event handler that logs the 
new window size after the user stops resizing the browser window for 
500 milliseconds.
*/

let resizeTimeout;

window.addEventListener("resize", function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    console.log("Window size:", window.innerWidth, "x", window.innerHeight);
  }, 500);
});

/*
Exercise 24: Optimizing DOM Manipulations

Description: 

Add 100 new list items to ID 'item-list' efficiently by 
using a DocumentFragment. You can create one by using:

`document.createDocumentFragment()`
*/

const fragment = document.createDocumentFragment();

for (let i = 4; i <= 103; i++) {
  const li = document.createElement("li");
  li.textContent = "Item " + i;
  fragment.appendChild(li);
}

itemList.appendChild(fragment);



/*
Exercise 25: Using Event Delegation

Description: 

Instead of adding event listeners to each <li> in 'item-list', 
add a single event listener to 'item-list' that logs the 
text of the clicked list item.
*/


itemList.addEventListener("click", function (event) {
	if (event.target && event.target.nodeName === "LI") {
	  console.log("List item clicked:", event.target.textContent);
	}
  });