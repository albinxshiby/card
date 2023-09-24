// This code adds some creative CSS and JS effects to the 404 error page.

window.onload = function() {
  // Add a rotating animation to the 404 error image.
  var img = document.querySelector("img");
  var rotate = setInterval(function() {
    img.style.transform = "rotate(" + (Math.random() * 360) + "deg)";
  }, 1000);

  // Add a smooth fade-in animation to the page content.
  var content = document.querySelector(".container");
  content.style.opacity = 0;
  content.addEventListener("transitionend", function() {
    content.style.opacity = 1;
  });
};
