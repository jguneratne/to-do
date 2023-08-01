import { addBtn, categoryForm, cancelCategoryBtn } from "./querySelectors";
import {
  newCategoryForm,
  hideCategoryForm,
  replaceCategorySections,
  createCategorySection,
  toDoFormDisplay,
} from "./view";
import { categories, newCategoryArray } from "./model";

export function showCategoryForm() {
  addBtn.addEventListener("pointerdown", newCategoryForm);
}

export function cancelCategoryForm() {
  cancelCategoryBtn.addEventListener("pointerdown", hideCategoryForm);
}

export function submitNewCategory() {
  categoryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    newCategoryArray();
    hideCategoryForm();
    replaceCategorySections();
    createCategorySection(categories);
  });
}

export function showToDoForm() {
  document.body.addEventListener("click", function (event) {
    const newToDoBtn = document.querySelector(".new-to-do");
    if (event.target === newToDoBtn) {
      toDoFormDisplay();
    }
  });
}

// Listen for submit of To Do Card form
// Tell model to push data to arrays
// Tell view to create new card in relevant category (Category View)
// Tell view to create new list item (Due Date View)

// Listen for Completed Item
// Tell model to push data to completed tasks
// Tell view to add item to completed tasks (Completed Tasks View)
