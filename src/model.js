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
localStorage.setItem("categories", JSON.stringify(categories));
export let categoriesArray = JSON.parse(localStorage.getItem("categories"));

export let toDoItems = [];
localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
export let toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));

export function newCategoryArray() {
  const newCategory = categoryInput.value.trim();

  if (
    categories.some(
      (category) => category.toLowerCase() === newCategory.toLowerCase()
    )
  ) {
    alert("Duplicate category. Please choose a new category title");
  } else {
    categories.push(newCategory);
    localStorage.setItem("categories", JSON.stringify(categories));
    categoriesArray = JSON.parse(localStorage.getItem("categories"));
    console.log(categoriesArray);
  }
}

export function newToDoItem() {
  const category = categoryName.textContent;
  const title = toDoTitle.value.trim();
  const priority = toDoPriority.value.trim();
  const description = toDoDescription.value.trim();
  const dueDate = toDoDueDate.value.trim();
  const creationTime = creationTimePicker.value.trim();
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
  localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
  toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
  console.log(toDoItemsArray);
}

export function removeToDoFromCategory(removedItem) {
  if (removedItem) {
    let confirmRemove = confirm(
      "Are you sure you want to delete this entry? This cannot be undone"
    );

    if (confirmRemove) {
      toDoItems.splice(removedItem, 1);
      localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
      toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
      console.log(toDoItemsArray);
    }
  }
}

// export function removeFromStorage() {
//   localStorage.removeItem("toDoItems");
// }

export function editToDo(entryIndex) {
  if (toDoItems.at(entryIndex)) {
    toDoItems.at(entryIndex).category = categoryName.textContent;
    toDoItems.at(entryIndex).title = toDoTitle.value.trim();
    toDoItems.at(entryIndex).priority = toDoPriority.value.trim();
    toDoItems.at(entryIndex).description = toDoDescription.value.trim();
    toDoItems.at(entryIndex).dueDate = toDoDueDate.value.trim();
  }
}

export function editToDoInStorage(entryIndex) {
  let arrayCount = localStorage.length;
  if (arrayCount) {
    for (let i = 0; i < arrayCount; i++) {
      let key = localStorage.key(i);
      console.log(key);

      if (key === "toDoItems") {
        let updateArray = JSON.parse(localStorage.getItem("toDoItems"));

        updateArray.at(entryIndex).category = categoryName.textContent;
        updateArray.at(entryIndex).title = toDoTitle.value.trim();
        updateArray.at(entryIndex).priority = toDoPriority.value.trim();
        updateArray.at(entryIndex).description = toDoDescription.value.trim();
        updateArray.at(entryIndex).dueDate = toDoDueDate.value.trim();
        localStorage.setItem("toDoItems", JSON.stringify(updateArray));
        toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
        console.log(toDoItemsArray);
      }
    }
  }
}

export function removeCategory(removedIndex, removedCatName) {
  if (removedCatName) {
    console.log(removedIndex);
    console.log(removedCatName);
    let confirmRemoveCat = confirm(
      "Are you sure you want to delete this category with all of its entries? This cannot be undone"
    );

    if (confirmRemoveCat) {
      const deletedEntries = toDoItems.filter(
        (entry) => entry.category !== removedCatName
      );
      //console.log(deletedEntries);
      toDoItems = deletedEntries;
      localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
      toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
      console.log(toDoItemsArray);

      localStorage.setItem("categories", JSON.stringify(categories));
      categoriesArray = JSON.parse(localStorage.getItem("categories"));
      console.log(categoriesArray);
    }
  }
}

export function changeCompleteStatus(taskIndex) {
  // if (toDoItems.at(taskIndex)) {
  //   if (toDoItems[taskIndex].completedTask === false) {
  //     toDoItems[taskIndex].completedTask = true;
  //     localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
  //     toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
  //   } else {
  //     toDoItems[taskIndex].completedTask === true;
  //     toDoItems[taskIndex].completedTask = false;
  //     localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
  //     toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
  //   }
  // }

  console.log(toDoItemsArray);
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
