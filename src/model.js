import {
  categoryInput,
  toDoTitle,
  toDoPriority,
  toDoDescription,
  toDoDueDate,
  categoryName,
} from "./querySelectors";

export const categories = [];
export let toDoItems = [];
export const completedTasks = [];

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
  const priority = toDoPriority.value;
  const description = toDoDescription.value;
  const dueDate = toDoDueDate.value;
  const completedTask = false;

  const toDoItem = {
    category,
    title,
    priority,
    description,
    dueDate,
    completedTask,
  };
  toDoItems.push(toDoItem);
  console.log(toDoItems);
}

export function removeToDoFromCategory(removedItem) {
  if (removedItem) {
    let confirmRemove = confirm(
      "Are you sure you want to delete this entry? This cannot be undone"
    );

    if (confirmRemove) {
      toDoItems.splice(removedItem, 1);
      console.log(toDoItems);
    }
  }
}

export function removeToDoFromCompleted(removedItem) {
  if (removedItem) {
    let confirmRemove = confirm(
      "Are you sure you want to delete this entry? This cannot be undone"
    );

    if (confirmRemove) {
      completedTasks.splice(removedItem, 1);
      console.log(completedTasks);
    }
  }
}

export function editToDo(entryIndex) {
  if (toDoItems.at(entryIndex)) {
    toDoItems.at(entryIndex).category = categoryName.textContent;
    toDoItems.at(entryIndex).title = toDoTitle.value;
    toDoItems.at(entryIndex).priority = toDoPriority.value;
    toDoItems.at(entryIndex).description = toDoDescription.value;
    toDoItems.at(entryIndex).dueDate = toDoDueDate.value;
    console.log(toDoItems);
  }
}

export function removeCategory(removedIndex, removedCat) {
  if (removedCat) {
    console.log(removedIndex);
    console.log(removedCat);
    let confirmRemoveCat = confirm(
      "Are you sure you want to delete this category with all of its entries? This cannot be undone"
    );

    if (confirmRemoveCat) {
      const deletedEntries = toDoItems.filter(
        (entry) => entry.category !== removedCat
      );
      //console.log(deletedEntries);
      toDoItems = deletedEntries;
      console.log(toDoItems);

      categories.splice(removedIndex, 1);
      console.log(categories);
    }
  }
}

export function changeCompleteStatus(taskIndex) {
  if (toDoItems.at(taskIndex)) {
    toDoItems[taskIndex].compeltedTask === false;
    toDoItems[taskIndex].completedTask = true;

    let moveTask = toDoItems.at(taskIndex);
    completedTasks.push(moveTask);
    toDoItems.splice(taskIndex, 1);

    console.log(toDoItems);
    console.log(completedTasks);
  } else if (completedTasks.at(taskIndex)) {
    if (completedTasks[taskIndex].completedTask === true) {
      completedTasks[taskIndex].completedTask = false;

      let reinstateTask = completedTasks.at(taskIndex);
      toDoItems.push(reinstateTask);
      completedTasks.splice(taskIndex, 1);

      console.log(toDoItems);
      console.log(completedTasks);
    }
  }
}
