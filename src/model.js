import {
  categoryInput,
  toDoTitle,
  toDoDescription,
  toDoDueDate,
  categoryName,
} from "./querySelectors";

export const categories = [];
export const toDoItems = [];
// const completedTasks = [];

export function newCategoryArray() {
  const newCategory = categoryInput.value;

  if (
    categories.some(
      (category) => category.toLowerCase() === newCategory.toLowerCase()
    )
  ) {
    alert("Duplicate category. Please choose a new category title");
  } else {
    categories.push(categoryInput.value);
    console.log(categories);
  }
}

export function newToDoItem() {
  const category = categoryName.textContent;
  const title = toDoTitle.value;
  const description = toDoDescription.value;
  const dueDate = toDoDueDate.value;
  const completedTask = false;

  const toDoItem = { category, title, description, dueDate, completedTask };
  toDoItems.push(toDoItem);
  console.log(toDoItems);
}

export function removeToDo() {
  if (toDoItems.length !== 0) {
    const deleteToDoEntry = document.querySelector("[data-entry");
    for (let i = 0; i < toDoItems.length; i++) {
      toDoItems.splice(deleteToDoEntry, 1);
      console.log(toDoItems);
    }
  }
}
