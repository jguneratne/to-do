import { addBtn, categoryForm, cancelCategoryBtn } from "./querySelectors";
import {
  newCategoryForm,
  hideCategoryForm,
  createCategorySection,
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
    createCategorySection(categories);

    // Add view function to show new category section in DOM
  });
}

// Add eventListener to add To Do item inside each category
// call view.newToDoItem

// Listen for submit of To Do Card form
// Tell model to push data to arrays
// Tell view to create new card in relevant category (Category View)
// Tell view to create new list item (Due Date View)

// Listen for Completed Item
// Tell model to push data to completed tasks
// Tell view to add item to completed tasks (Completed Tasks View)
