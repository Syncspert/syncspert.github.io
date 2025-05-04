document.addEventListener("DOMContentLoaded", function () {
  const aboutUsSection = document.getElementById("about-us");
  const seoMessage = document.getElementById("seo-message");
  const contactUsSection = document.getElementById("contact-us");
  const contactDesc = document.getElementById("contact-desc");
  const ourBrands = document.getElementById("our-brands");
  const privacyPolicy = document.getElementById("privacy-policy");
  const products = document.getElementById("products");

  const mobileMenu = document.querySelector(".mobile-menu");
  const menuBtnOpen = document.querySelector(".menu-btn-open");
  const menuBtnClose = document.querySelector(".menu-btn-close");
  const sections = document.querySelectorAll(".section");
  const contactButtons = document.querySelectorAll(".contact-btn");
  const iconsToggle = document.querySelectorAll(".toggle-icon");

  products.classList.remove("visible-products");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("is-open");
    document.body.classList.toggle("is-scroll-disabled");
  };

  menuBtnOpen.addEventListener("click", toggleMenu);
  menuBtnClose.addEventListener("click", toggleMenu);

  iconsToggle.forEach((icon) => {
    icon.addEventListener("click", () => {
      const additionalContent = icon
        .closest(".item")
        .querySelector(".hidden-info");
      additionalContent.style.display =
        additionalContent.style.display === "none" ? "block" : "none";
      icon.src = icon.src.includes("plus")
        ? "./images/icon-minus.svg"
        : "./images/icon-plus.svg";
    });
  });

  contactButtons.forEach((button) =>
    button.addEventListener("click", () => handleLinkClick("contact-us"))
  );

  const displaySections = (sections) => {
    const allSections = document.querySelectorAll(".section");
    allSections.forEach((section) => {
      section.classList.add("hidden");
    });

    sections.forEach((section) => {
      section.classList.remove("hidden");
    });
  };

  const handleLinkClick = (targetId) => {
    switch (targetId) {
      case "about-us":
        displaySections([aboutUsSection, seoMessage]);
        break;
      case "contact-us":
        displaySections([contactDesc, contactUsSection]);
        break;
      case "our-brands":
        displaySections([ourBrands]);
        products.classList.add("visible-products");
        iconsToggle.forEach((icon) => (icon.style.display = "block"));
        break;
      case "privacy-policy":
        displaySections([privacyPolicy]);
        break;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  document
    .querySelectorAll(".header-link, .mobile-menu-link")
    .forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        handleLinkClick(targetId);
        if (mobileMenu.classList.contains("is-open")) toggleMenu();
      });
    });
});
