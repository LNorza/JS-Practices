// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function (event) {
  links.classList.toggle("show-links");
});

//Function to close the menu if clicked outside of it
document.addEventListener("click", function (event) {
    if (!navToggle.contains(event.target) && !links.contains(event.target)){
        links.classList.remove("show-links")
    }
});
