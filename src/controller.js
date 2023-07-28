import { addBtn, cancelCategoryBtn } from "./querySelectors";
import { newCategoryForm, hideCategoryForm } from "./view";

// Add eventListener to plus btn to show category form
// ons submit, model pushes new category to array
// on submit, view hides and clears category form, and shows new category section

export function showCategoryForm() {
  addBtn.addEventListener("pointerdown", newCategoryForm);
}

export function cancelCategoryForm() {
  cancelCategoryBtn.addEventListener("pointerdown", hideCategoryForm);
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
