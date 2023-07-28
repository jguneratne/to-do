import { categoryForm, categoryTab, sideNav } from "./querySelectors";

export function newCategoryForm() {
  categoryForm.style.display = "initial";
  categoryTab.classList.add("tab-content--active");

  if (categoryForm.style.display === "initial") {
    sideNav.classList.add("cat-form-visible");
  }
}

export function hideCategoryForm() {
  categoryForm.style.display = "none";
  sideNav.classList.remove("cat-form-visible");
}
