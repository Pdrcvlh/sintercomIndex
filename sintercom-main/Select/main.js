const dropdown = document.getElementById("dropdown");

dropdown.addEventListener("change", function() {
  dropdown.animate([
    // animate from
    { height: "30px" },
    // animate to
    { height: "0px" }
  ], {
    duration: 500, // animation duration in milliseconds
    easing: "ease-out" // easing type
  });
});
