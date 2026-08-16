// TECHNOVA Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Contact Form
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            successMessage.textContent =
                "Thank you! Your message has been sent successfully.";

            contactForm.reset();
        });
    }

});