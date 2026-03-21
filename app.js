function toggleMenu() {
  let navbar = document.getElementById("navbar");
  let bars = document.getElementById("menuIcon");

  navbar.classList.toggle("show");

  if (navbar.classList.contains("show")) {
    bars.classList.remove("fa-bars");
    bars.classList.add("fa-xmark");
  } else {
    bars.classList.remove("fa-xmark");
    bars.classList.add("fa-bars");
  }
}
