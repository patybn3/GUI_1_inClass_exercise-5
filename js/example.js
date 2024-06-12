// ADD NEW ITEM TO END OF LIST
var list = document.getElementsByTagName("ul")[0];
var createEnd = document.createElement("li");

createEnd.textContent = "cream";

list.appendChild(createEnd);

// ADD NEW ITEM START OF LIST
var createStart = document.createElement("li");
createStart.textContent = "kale";
list.insertBefore(createStart, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var addClass = document.querySelectorAll("ul li");

addClass.forEach(function(item) {
    item.classList.add("cool");
});

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var count = addClass.length;

var headerNum = document.getElementsByTagName("h2")[0];
var element = document.createElement("span");
headerNum.appendChild(element);

element.textContent = ` (${count})`; // Set the count inside the span
headerNum.appendChild(element);