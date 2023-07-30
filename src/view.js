import { categoryFormBox, categoryTab, sideNav } from "./querySelectors";

export function newCategoryForm() {
  categoryFormBox.style.display = "initial";
  categoryTab.classList.add("tab-content--active");

  if (categoryFormBox.style.display === "initial") {
    sideNav.classList.add("cat-form-visible");
  }
}

export function clearCategoryForm() {
  document.forms[0].reset();
}

export function hideCategoryForm() {
  categoryFormBox.style.display = "none";
  sideNav.classList.remove("cat-form-visible");
}
