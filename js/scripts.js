// Logic for hide or show the back-to-top button
const showOnPx = 50;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

// Pending function review, button is always shown
document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
});

// Scroll to top function
const goToTop = () => {
  document.body.scrollIntoView({
		behavior: "smooth",
	});
};

backToTopButton.addEventListener("click", goToTop);