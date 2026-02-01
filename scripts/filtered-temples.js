// Get the current year
const currentYear = new Date().getFullYear();

// Insert current year into the first <p> in the footer
const footer = document.querySelector("footer");
const firstPara = footer.querySelector("p");
firstPara.textContent = `© ${currentYear} ❣️Ukpai Godwin Umedike❣️ Nigeria`;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Insert last modified date into the second <p> in the footer
const secondPara = footer.querySelectorAll("p")[1];
secondPara.textContent = `Last Modified: ${lastModifiedDate}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
hamButton.setAttribute("aria-expanded", "false");
hamButton.setAttribute("aria-label", "Toggle menu");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");

  const expanded = hamButton.classList.contains("open");
  hamButton.setAttribute("aria-expanded", expanded.toString());
});




const cardsContainer = document.querySelector("#temple-cards");

// Utility to extract year from dedication date string
function getYear(dedicatedStr) {
  return parseInt(dedicatedStr.split(",")[0]);
}

// Function to create the HTML string for a temple card (using map returns an array of HTML strings)
function createTempleCards(templeArray) {
  // Use map to transform each temple object into an HTML string for the card
  return templeArray
    .map(
      (temple) => `
    <section class="temple-card">
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
      <h3>${temple.templeName}</h3>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area.toLocaleString()} sq ft</p>
    </section>
  `
    )
    .join(""); // join all HTML strings into one big string
}

// Function to display temples by inserting HTML into container
function displayTemples(templeArray) {
  cardsContainer.innerHTML = createTempleCards(templeArray);
}

// Show all temples initially
displayTemples(temples);

// FILTERS USING FILTER METHOD

// Old temples: built before 1900
function filterOld() {
  return temples.filter((temple) => getYear(temple.dedicated) < 1900);
}

// New temples: built after 2000
function filterNew() {
  return temples.filter((temple) => getYear(temple.dedicated) > 2000);
}

// Large temples: area > 90000 sq ft
function filterLarge() {
  return temples.filter((temple) => temple.area > 90000);
}

// Small temples: area < 10000 sq ft
function filterSmall() {
  return temples.filter((temple) => temple.area < 10000);
}

// BONUS: Using reduce to find the total area of all temples displayed
function totalArea(templeArray) {
  return templeArray.reduce((sum, temple) => sum + temple.area, 0);
}

// EVENT LISTENERS

document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(filterOld());
});

document.querySelector("#new").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(filterNew());
});

document.querySelector("#large").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(filterLarge());
});

document.querySelector("#small").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(filterSmall());
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27", 
    area: 102000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-exterior-1080173-wallpaper.jpg"
  }

  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",  
    area: 253015,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-utah/400x250/salt-lake-temple-exterior-2-1080174-wallpaper.jpg"
  }
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",  
    area: 12000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-exterior-1080175-wallpaper.jpg"
  }
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10", 
    area: 70000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-exterior-1080176-wallpaper.jpg"
  }
  {
    templeName: "Kuala Lumpur Malaysia",
    location: "Kuala Lumpur, Malaysia",
    dedicated: "2023, June, 4", 
    area: 8500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kuala-lumpur-malaysia/400x250/kuala-lumpur-malaysia-temple-exterior-1080177-wallpaper.jpg"
  }
  {
    templeName: "Sapporo Japan",
    location: "Sapporo, Japan",
    dedicated: "2016, October, 16", 
    area: 9500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-temple-exterior-1080178-wallpaper.jpg"
  }
]; 
