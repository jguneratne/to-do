import {
  categoryInput,
  toDoTitle,
  toDoPriority,
  toDoDescription,
  toDoDueDate,
  creationTimePicker,
  categoryName,
} from "./querySelectors";

let categories = JSON.parse(localStorage.categories || "[]");
localStorage.setItem("categories", JSON.stringify(categories));
export let categoriesArray = JSON.parse(localStorage.getItem("categories"));

let toDoItems = JSON.parse(localStorage.toDoItems || "[]");
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
    let addCategory = JSON.parse(localStorage.getItem("categories"));
    addCategory.push(newCategory);
    localStorage.setItem("categories", JSON.stringify(addCategory));
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
  let addToDoItem = JSON.parse(localStorage.getItem("toDoItems"));
  addToDoItem.push(toDoItem);
  localStorage.setItem("toDoItems", JSON.stringify(addToDoItem));
  toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
  console.log(toDoItemsArray);
}

export function removeToDoFromCategory(removedItem) {
  if (removedItem) {
    let confirmRemove = confirm(
      "Are you sure you want to delete this entry? This cannot be undone"
    );

    if (confirmRemove) {
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
    }
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
      let editToDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
      const deletedEntriesByCatName = editToDoItemsArray.filter(
        (entry) => entry.category !== removedCatName
      );

      editToDoItemsArray = deletedEntriesByCatName;

      localStorage.setItem("toDoItems", JSON.stringify(editToDoItemsArray));
      toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
      console.log(toDoItemsArray);

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
  let checkComplete = JSON.parse(localStorage.getItem("toDoItems"));

  if (checkComplete.at(taskIndex)) {
    if (checkComplete[taskIndex].completedTask === false) {
      checkComplete[taskIndex].completedTask = true;

      let arrayCount = localStorage.length;
      if (arrayCount) {
        for (let i = 0; i < arrayCount; i++) {
          let key = localStorage.key(i);
          console.log(key);

          if (key === "toDoItems") {
            localStorage.setItem("toDoItems", JSON.stringify(checkComplete));
            toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
            console.log(toDoItemsArray);
          }
        }
      }
    } else {
      let uncheckComplete = JSON.parse(localStorage.getItem("toDoItems"));

      uncheckComplete[taskIndex].completedTask === true;
      uncheckComplete[taskIndex].completedTask = false;

      let arrayCount = localStorage.length;
      if (arrayCount) {
        for (let i = 0; i < arrayCount; i++) {
          let key = localStorage.key(i);
          console.log(key);

          if (key === "toDoItems") {
            localStorage.setItem("toDoItems", JSON.stringify(uncheckComplete));
            toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
            console.log(toDoItemsArray);
          }
        }
      }
    }
  }
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
