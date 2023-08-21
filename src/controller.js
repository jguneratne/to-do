import {
  contentBox,
  addCategoryBtn,
  selectToDoBtn,
  agreeBtn,
  addBtn,
  categoryForm,
  cancelCategoryBtn,
  toDoForm,
  cancelToDoBtn,
  addToDoBtn,
  editToDoBtn,
  categoryBtn,
  dueDateBtn,
  priorityBtn,
  sideNav,
} from "./querySelectors";
import {
  selectAddType,
  displayCategoryWarning,
  closeToDoWarning,
  closeSelectionBox,
  showCatMessage,
  newCategoryForm,
  hideCategoryForm,
  replaceCategorySections,
  createCategorySection,
  toDoFormDisplay,
  hideToDoForm,
  displayToDoEntry,
  replaceToDoItems,
  showFormWithInfo,
  showCompletedTasks,
  replaceCompletedRows,
  showByDueDate,
  replaceDueDateRows,
  showByPriority,
  replacePriorityRows,
} from "./view";
import {
  // categories,
  categoriesArray,
  // toDoItems,
  toDoItemsArray,
  newCategoryArray,
  newToDoItem,
  editToDo,
  editToDoInStorage,
  removeToDoFromCategory,
  removeCategory,
  changeCompleteStatus,
  sortByCreationDate,
  sortByDueDate,
  sortByPriority,
} from "./model";
import {
  findPastDue,
  formatDatesCategory,
  formatDatesDueView,
  formatDatesPriority,
} from "./dates";

// export function displayMsgAddCat() {
//   if (categories.length === 0) {
//     console.log(categories.length);
//     showCatMessage();
//   }
// }

export function selectActionForm() {
  addBtn.addEventListener("pointerdown", selectAddType);
}

export function showCategoryForm() {
  addCategoryBtn.addEventListener("pointerdown", newCategoryForm);
}

export function showCategoryWarning() {
  selectToDoBtn.addEventListener("pointerdown", function () {
    if (categoriesArray.length === 0) {
      displayCategoryWarning();
    } else {
      closeSelectionBox();
    }
  });
}

export function hideCategoryWarning() {
  agreeBtn.addEventListener("pointerdown", function () {
    closeToDoWarning();
  });
}

export function cancelCategoryForm() {
  cancelCategoryBtn.addEventListener("pointerdown", hideCategoryForm);
}

export function cancelToDo() {
  cancelToDoBtn.addEventListener("pointerdown", hideToDoForm);
}

export function submitNewCategory() {
  categoryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    newCategoryArray();
    hideCategoryForm();
    replaceCategorySections();
    createCategorySection(categoriesArray);
    replaceToDoItems();
    displayToDoEntry(toDoItemsArray);
  });
}

export function submitToDo() {
  toDoForm.addEventListener("pointerdown", (e) => {
    if (e.target === addToDoBtn) {
      newToDoItem();
      sortByCreationDate();
      hideToDoForm();
      replaceToDoItems();
      displayToDoEntry(toDoItemsArray);
      findPastDue();
      formatDatesCategory();
    }

    if (e.target === editToDoBtn) {
      editToDo();
      editToDoInStorage();
      sortByCreationDate();
      hideToDoForm();
      replaceToDoItems();
      displayToDoEntry(toDoItemsArray);
      findPastDue();
      formatDatesCategory();
    }
  });
}

export function displayByView() {
  sideNav.addEventListener("pointerdown", (event) => {
    // Display by Category
    if (categoryBtn.classList.contains("cat-tab")) {
      sortByCreationDate();
      replaceToDoItems();
      displayToDoEntry(toDoItemsArray);
      findPastDue();
      formatDatesCategory();
    }
    // Display by Due Date
    if (dueDateBtn.classList.contains("date-tab")) {
      sortByDueDate();
      replaceDueDateRows();
      showByDueDate(toDoItemsArray);
      findPastDue();
      formatDatesDueView();
    }
    // Display by Priority
    if (priorityBtn.classList.contains("priority-tab")) {
      sortByPriority();
      replacePriorityRows();
      showByPriority(toDoItemsArray);
      findPastDue();
      formatDatesPriority();
    }
  });
}

export function handleEventDelegation() {
  contentBox.addEventListener("pointerdown", function (event) {
    //Display To Do Entry Form
    const addBtn = event.target.dataset.category;
    const addBtns = Array.from(document.querySelectorAll("[data-category"));
    addBtns.forEach((button) => {
      if (event.target === button) {
        toDoFormDisplay(addBtn);
      }
    });

    // Delete To Do Items
    const deleteToDoItem = event.target.dataset.itemDelete;
    const toDoEntries = Array.from(
      document.querySelectorAll(["[data-item-delete]"])
    );
    toDoEntries.forEach((entry) => {
      if (event.target === entry) {
        removeToDoFromCategory(deleteToDoItem);
        sortByCreationDate();
        replaceToDoItems();
        displayToDoEntry(toDoItemsArray);
        findPastDue();
        formatDatesCategory();
        replaceCompletedRows();
        showCompletedTasks(toDoItemsArray);

        if (dueDateBtn.classList.contains("btn-ctrl--active")) {
          sortByDueDate();
          replaceDueDateRows();
          showByDueDate(toDoItemsArray);
          findPastDue();
          formatDatesDueView();
        }
        if (priorityBtn.classList.contains("btn-ctrl--active")) {
          sortByPriority();
          replacePriorityRows();
          showByPriority(toDoItemsArray);
          findPastDue();
          formatDatesPriority();
        }
      }
    });

    // Delete Category with any and all entries
    const deleteCategoryIndex = event.target.dataset.deleteCatIndex;
    const deleteCategoryName = event.target.dataset.deleteCat;
    const deleteCatBtns = Array.from(
      document.querySelectorAll("[data-delete-cat")
    );
    deleteCatBtns.forEach((btn) => {
      if (event.target === btn) {
        removeCategory(deleteCategoryIndex, deleteCategoryName);
        replaceCategorySections();
        createCategorySection(categoriesArray);
        replaceToDoItems();
        displayToDoEntry(toDoItemsArray);
        findPastDue();
        formatDatesCategory();
        if (categoriesArray.length === 0) {
          showCatMessage();
        }
      }
    });

    // Display Form to edit To Do entry
    const editIcon = parseInt(event.target.dataset.edit);
    const editBtns = Array.from(document.querySelectorAll("[data-edit"));
    editBtns.forEach((edit) => {
      if (event.target === edit) {
        console.log(typeof editIcon);
        showFormWithInfo(editIcon, toDoItemsArray);
      }
    });
  });
}

export function markComplete() {
  contentBox.addEventListener("change", (event) => {
    const taskIndex = event.target.dataset.check;

    if (event.target === taskIndex) console.log(taskIndex);
    changeCompleteStatus(taskIndex);
    replaceCompletedRows();
    showCompletedTasks(toDoItemsArray);
    replaceToDoItems();
    displayToDoEntry(toDoItemsArray);
    findPastDue();
    formatDatesCategory();

    if (dueDateBtn.classList.contains("btn-ctrl--active")) {
      sortByDueDate();
      replaceDueDateRows();
      showByDueDate(toDoItemsArray);
      findPastDue();
      formatDatesDueView();
    }
    if (priorityBtn.classList.contains("btn-ctrl--active")) {
      sortByPriority();
      replacePriorityRows();
      showByPriority(toDoItemsArray);
      findPastDue();
      formatDatesPriority();
    }
  });
}
