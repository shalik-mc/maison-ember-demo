
// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();

// PREVENT PAST RESERVATION DATES

const dateInput = document.querySelector('input[name="date"]');

const today = new Date();

const localToday = new Date(
  today.getTime() - today.getTimezoneOffset() * 60000
)
  .toISOString()
  .split("T")[0];

dateInput.min = localToday;

// RESERVATION FORM DEMO

const reservationForm =
  document.getElementById("reservationForm");

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!reservationForm.reportValidity()) return;

  const name = reservationForm.elements.name.value.trim();
  const date = reservationForm.elements.date.value;
  const guests = reservationForm.elements.guests.value;

  document.getElementById("formMessage").textContent =
    `Thank you, ${name}! Your demo request is ready. ` +
    `Date: ${date}. Guests: ${guests}. ` +
    `No actual reservation has been sent.`;

  reservationForm.reset();

  dateInput.min = localToday;
});
