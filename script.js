//Get Items

var slideImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// console.table(slideImages);

//Get Number of Sliders
var SlidesCount = slideImages.length;

//console.log(SlidesCount);

//Get First Paper or img
var curentSlider = 1;

//Get Slider His Number

var slideNumberElemnt = document.getElementById("slide-number");

//next and prev Button
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

//Handle click on previous and next buttons
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

//Create the Main UL Element
var paginationElement = document.createElement("ul");

//Set ID On Created UI Element
paginationElement.setAttribute("id", "pagination-ul");

// create ListItem Based on Slides Count

for (var i = 1; i <= SlidesCount; i++) {
  //Create Li Element
  var PaginationItem = document.createElement("li");

  //Set Custem Attribute
  PaginationItem.setAttribute("data-index", i);

  //Set Item Content
  PaginationItem.appendChild(document.createTextNode(i));

  //Append Items To The Main UI List
  paginationElement.appendChild(PaginationItem);
}

//Inser Ul In Page
document.getElementById("indictors").appendChild(paginationElement);

//Get The New Created UI
var paginationCreatedUl = document.getElementById("pagination-ul");

//Get Pagination Items
var paginationsBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

//Loop Through  All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {
  paginationsBullets[i].onclick = function () {
    curentSlider = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

//Trigger the checker function
theChecker();

//next Slide function
function nextSlide() {
  if (!nextBtn.classList.contains("disabled")) {
    curentSlider++;
    theChecker();
  }
}

//Prev Slide function
function prevSlide() {
  if (!prevBtn.classList.contains("disabled")) {
    curentSlider--;
    theChecker();
  }
}

//craete the checker function

function theChecker() {
  //set the slide number
  slideNumberElemnt.textContent =
    "Slide #" + curentSlider + " of " + SlidesCount;

  //remove All Active Classes
  removeAllActive();

  //set active of class on current slide
  slideImages[curentSlider - 1].classList.add("active");

  //Set Active Class on current pagination
  paginationCreatedUl.children[curentSlider - 1].classList.add("active");

  //check if current slide is the first
  if (curentSlider == 1) {
    //add disabled class on previous button
    prevBtn.classList.add("disabled");
  } else {
    //Remove disabled class From previous button
    prevBtn.classList.remove("disabled");
  }

  //check if current slide is the Last
  if (curentSlider == SlidesCount) {
    //add disabled class on nextBtn button
    nextBtn.classList.add("disabled");
  } else {
    //Remove disabled class From nextBtn button
    nextBtn.classList.remove("disabled");
  }
}

//Remove All Active Classes  From Images And Pagination Buttons

function removeAllActive() {
  //Loop Through Images
  slideImages.forEach(function (img) {
    img.classList.remove("active");
  });

  //Loop through pagination bullets
  paginationsBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
