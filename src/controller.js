import newCategoryForm from "./view";
// import model from "./model";

// Add eventListener to plus btn
// call view.newCategoryForm
// tell model to push new category to array

export default function showCategoryForm() {
  const addBtn = document.querySelector(".show-form-btn");

  addBtn.addEventListener("pointerdown", newCategoryForm);
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
