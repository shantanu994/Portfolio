// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Example project button actions (you can replace alert with real links)
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("This will open the project link!");
  });
});
