import {
  categoryInput,
  toDoTitle,
  toDoPriority,
  toDoDescription,
  toDoDueDate,
  creationTimePicker,
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
  const creationTime = creationTimePicker.value;
  const completedTask = false;

  const toDoItem = {
    category,
    title,
    priority,
    description,
    dueDate,
    creationTime,
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
  } else {
    if (toDoItems[taskIndex].completedTask === true);
    toDoItems[taskIndex].completedTask = false;
  }
}

export function sortByCreationDate() {
  toDoItems.sort(
    (date1, date2) =>
      Date.parse(date1.creationTime) - Date.parse(date2.creationTime)
  );
  console.log(toDoItems);
}

export function sortByDueDate() {
  toDoItems.sort(
    (date1, date2) => Date.parse(date1.dueDate) - Date.parse(date2.dueDate)
  );
  console.log(toDoItems);
}

export function sortByPriority() {
  const importance = {
    low: 3,
    medium: 2,
    high: 1,
  };

  toDoItems.sort((a, b) => importance[a.priority] - importance[b.priority]);

  console.log(toDoItems);
}
