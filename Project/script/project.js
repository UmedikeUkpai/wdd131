// Highlight active navigation link
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.color = "#ff9800";
    }
  });

  // Handle membership forms
  const forms = document.querySelectorAll(".membership-form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("input[name='name']").value;
      const email = form.querySelector("input[name='email']").value;
      const packageName = form.getAttribute("data-package");

      alert(`Thank you, ${name}! You have registered for the ${packageName} package. Confirmation will be sent to ${email}.`);
      form.reset();
    });
  });

  // Navigate from Membership to Details
// sourcery skip: avoid-function-declarations-in-blocks
function goToDetails(packageName) {
  localStorage.setItem("selectedPackage", packageName);
  window.location.href = "details.html";
}

// Handle details form submission
document.addEventListener("DOMContentLoaded", () => {
  const detailsForm = document.getElementById("details-form");
  if (detailsForm) {
    detailsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;

      localStorage.setItem("memberName", name);
      localStorage.setItem("memberEmail", email);
      localStorage.setItem("memberPhone", phone);

      window.location.href = "payment.html";
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".progress-bar ul li");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove active from all tabs
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Hide all content panes
      panes.forEach(pane => pane.classList.remove("active"));

      // Show selected pane
      const target = tab.getAttribute("data-tab");
      document.getElementById(target).classList.add("active");
    });
// Get the current year
const currentYear = new Date().getFullYear();

// Insert current year into the first <p> in the footer
const footer = document.querySelector("footer");
const firstPara = footer.querySelector("p");
firstPara.textContent = `© ${currentYear} | ❣️Ukpai godwin Umedike❣️ | Nigeria`;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Insert last modified date into the second <p> in the footer
const secondPara = footer.querySelectorAll("p")[1];
secondPara.textContent = `Last Modified: ${lastModifiedDate}`;
    
  });
});
});
});