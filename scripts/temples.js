// Set dynamic copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Toggle navigation menu in mobile view
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    
    // Change hamburger icon to 'X' when menu is open
    if (navMenu.classList.contains("active")) {
        hamburger.innerHTML = "&#10006;"; // 'X' symbol
    } else {
        hamburger.innerHTML = "&#9776;"; // Hamburger menu symbol
    }
});