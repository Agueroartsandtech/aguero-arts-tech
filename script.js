// Aguero Tech JavaScript

console.log("Aguero Tech website loaded successfully.");


// Mobile navigation
const menuButton = document.getElementById("menuBtn");
const navigation = document.getElementById("navLinks");

if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("open");

    });

}


// Automatically update copyright year
const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}