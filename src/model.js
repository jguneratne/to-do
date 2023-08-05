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
  if (categories.includes(categoryInput.value)) {
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
