const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.03)";
  });

  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
  });
});