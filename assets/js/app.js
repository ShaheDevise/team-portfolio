const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const values = window.scrollY;

  console.log("Scroll Value:", values); // Scroll value দেখুন

  if (values > 90) {
    navbar.classList.add("nav-animation");
    navbar.classList.remove("gray-color");
    console.log("Class added: nav-animation");
  } else if (values <= 1) {
    navbar.classList.add("gray-color");
    navbar.classList.remove("nav-animation");
    console.log("Class added: gray-color");
  } else {
    navbar.classList.remove("nav-animation");
    navbar.classList.remove("gray-color");
    console.log("Classes removed");
  }
});
