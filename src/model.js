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

export function removeToDo(removedItem) {
  if (removedItem) {
    let confirmRemove = confirm(
      "Are you sure you want to delete? This cannot be undone"
    );

    if (confirmRemove) {
      toDoItems.splice(removedItem, 1);
      console.log(toDoItems);
    }
  }
}
