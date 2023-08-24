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

      let arrayCount = localStorage.length;
      if (arrayCount) {
        for (let i = 0; i < arrayCount; i++) {
          let key = localStorage.key(i);
          console.log(key);

          if (key === "toDoItems") {
            let updateArray = JSON.parse(localStorage.getItem("toDoItems"));

            updateArray.splice(removedItem, 1);

            localStorage.setItem("toDoItems", JSON.stringify(updateArray));
            toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
            console.log(toDoItemsArray);
          }
        }
      }

      console.log(toDoItemsArray);
    }
  }
}

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
  console.log(entryIndex);
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
      const deletedEntriesByCatName = toDoItems.filter(
        (entry) => entry.category !== removedCatName
      );

      toDoItems = deletedEntriesByCatName;
      console.log(toDoItems);
      localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
      toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
      console.log(toDoItemsArray);

      categories.splice(removedIndex, 1);
      console.log(categories);

      let arrayCount = localStorage.length;
      if (arrayCount) {
        for (let i = 0; i < arrayCount; i++) {
          let key = localStorage.key(i);
          console.log(key);

          if (key === "categories") {
            let updateCategoriesArray = JSON.parse(
              localStorage.getItem("categories")
            );

            updateCategoriesArray.splice(removedCatName, 1);

            localStorage.setItem(
              "categories",
              JSON.stringify(updateCategoriesArray)
            );
            categoriesArray = JSON.parse(localStorage.getItem("categories"));
            console.log(categoriesArray);
          }
        }
      }
    }
  }
}

export function changeCompleteStatus(taskIndex) {
  if (toDoItems.at(taskIndex)) {
    if (toDoItems[taskIndex].completedTask === false) {
      toDoItems[taskIndex].completedTask = true;

      let arrayCount = localStorage.length;
      if (arrayCount) {
        for (let i = 0; i < arrayCount; i++) {
          let key = localStorage.key(i);
          console.log(key);

          if (key === "toDoItems") {
            let updateArray = JSON.parse(localStorage.getItem("toDoItems"));

            updateArray[taskIndex].completedTask = true;
            localStorage.setItem("toDoItems", JSON.stringify(updateArray));
            toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
            console.log(toDoItemsArray);
          }
        }
      }
    } else {
      toDoItems[taskIndex].completedTask === true;
      toDoItems[taskIndex].completedTask = false;

      let arrayCount = localStorage.length;
      if (arrayCount) {
        for (let i = 0; i < arrayCount; i++) {
          let key = localStorage.key(i);
          console.log(key);

          if (key === "toDoItems") {
            let updateArray = JSON.parse(localStorage.getItem("toDoItems"));

            updateArray[taskIndex].completedTask = false;
            localStorage.setItem("toDoItems", JSON.stringify(updateArray));
            toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
            console.log(toDoItemsArray);
          }
        }
      }
    }
  }

  console.log(toDoItemsArray);
}

export function sortByCreationDate() {
  toDoItemsArray.sort(
    (date1, date2) =>
      Date.parse(date1.creationTime) - Date.parse(date2.creationTime)
  );

  console.log(toDoItemsArray);
}

export function sortByDueDate() {
  toDoItemsArray.sort(
    (date1, date2) => Date.parse(date1.dueDate) - Date.parse(date2.dueDate)
  );

  console.log(toDoItemsArray);
}

export function sortByPriority() {
  const importance = {
    low: 3,
    medium: 2,
    high: 1,
  };

  toDoItemsArray.sort(
    (a, b) => importance[a.priority] - importance[b.priority]
  );

  console.log(toDoItemsArray);
}
