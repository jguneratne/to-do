export default function newCategoryForm() {
  const newCatForm = document.querySelector(".cat-form-container");
  const categoryTab = document.querySelector(".by-category");

  newCatForm.style.display = "initial";
  categoryTab.classList.add("tab-content--active");

  if (newCatForm.style.display === "initial") {
    const sideNav = document.querySelector(".side-nav");

    sideNav.classList.add("cat-form-visible");
  }
}
