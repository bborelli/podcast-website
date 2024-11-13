function toggleBio(bioId) {
  const bio = document.getElementById(bioId);
  bio.classList.toggle("show");
}

window.onscroll = function () {
  const backToTopButton = document.getElementById("backToTop");
  if (document.documentElement.scrollTop > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

document.getElementById("backToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
