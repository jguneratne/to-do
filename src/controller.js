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
  showCatMessage,
  displayCategoryWarning,
  closeToDoWarning,
  closeSelectionBox,
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
  categoriesArray,
  newCategoryArray,
  newToDoItem,
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

export function buildFromStorage() {
  if (categoriesArray.length === 0) {
    showCatMessage();
  } else {
    replaceCategorySections();
    createCategorySection();
    sortByCreationDate();
    replaceToDoItems();
    displayToDoEntry();
    findPastDue();
    formatDatesCategory();
    replaceCompletedRows();
    showCompletedTasks();
  }
}

export function selectActionForm() {
  addBtn.addEventListener("pointerdown", selectAddType);

  addBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      selectAddType();
    }
  });
}

export function showCategoryForm() {
  addCategoryBtn.addEventListener("pointerdown", newCategoryForm);

  addCategoryBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      newCategoryForm();
    }
  });
}

export function showCategoryWarning() {
  selectToDoBtn.addEventListener("pointerdown", function () {
    if (categoriesArray.length === 0) {
      displayCategoryWarning();
    } else {
      closeSelectionBox();
    }
  });

  selectToDoBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      if (categoriesArray.length === 0) {
        displayCategoryWarning();
      } else {
        closeSelectionBox();
      }
    }
  });
}

export function hideCategoryWarning() {
  agreeBtn.addEventListener("pointerdown", function () {
    closeToDoWarning();
  });

  agreeBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      closeToDoWarning();
    }
  });
}

export function cancelCategoryForm() {
  cancelCategoryBtn.addEventListener("pointerdown", hideCategoryForm);

  cancelCategoryBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      hideCategoryForm();
    }
  });
}

export function cancelToDo() {
  cancelToDoBtn.addEventListener("pointerdown", hideToDoForm);

  cancelToDoBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      hideToDoForm();
    }
  });
}

export function submitNewCategory() {
  categoryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    newCategoryArray();
    hideCategoryForm();
    replaceCategorySections();
    createCategorySection();
    replaceToDoItems();
    displayToDoEntry();
  });
}

export function submitToDo() {
  toDoForm.addEventListener("pointerdown", (e) => {
    if (e.target === addToDoBtn) {
      newToDoItem();
      sortByCreationDate();
      hideToDoForm();
      replaceToDoItems();
      displayToDoEntry();
      findPastDue();
      formatDatesCategory();
    }

    if (e.target === editToDoBtn) {
      editToDoInStorage();
      sortByCreationDate();
      hideToDoForm();
      replaceToDoItems();
      displayToDoEntry();
      findPastDue();
      formatDatesCategory();
    }
  });

  toDoForm.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target === addToDoBtn) {
      newToDoItem();
      sortByCreationDate();
      hideToDoForm();
      replaceToDoItems();
      displayToDoEntry();
      findPastDue();
      formatDatesCategory();
    }

    if (e.key === "Enter" && e.target === editToDoBtn) {
      editToDoInStorage();
      sortByCreationDate();
      hideToDoForm();
      replaceToDoItems();
      displayToDoEntry();
      findPastDue();
      formatDatesCategory();
    }
  });
}

export function displayByView() {
  sideNav.addEventListener("pointerdown", () => {
    // Display by Category
    if (categoryBtn.classList.contains("cat-tab")) {
      sortByCreationDate();
      replaceToDoItems();
      displayToDoEntry();
      findPastDue();
      formatDatesCategory();
    }
    // Display by Due Date
    if (dueDateBtn.classList.contains("date-tab")) {
      sortByDueDate();
      replaceDueDateRows();
      showByDueDate();
      findPastDue();
      formatDatesDueView();
    }
    // Display by Priority
    if (priorityBtn.classList.contains("priority-tab")) {
      sortByPriority();
      replacePriorityRows();
      showByPriority();
      findPastDue();
      formatDatesPriority();
    }
  });
}

export function displayByViewWithKeyboard() {
  sideNav.addEventListener("keydown", (event) => {
    // Display by Category
    if (event.key === "Enter" && categoryBtn.classList.contains("cat-tab")) {
      sortByCreationDate();
      replaceToDoItems();
      displayToDoEntry();
      findPastDue();
      formatDatesCategory();
    }
    // Display by Due Date
    if (event.key === "Enter" && dueDateBtn.classList.contains("date-tab")) {
      sortByDueDate();
      replaceDueDateRows();
      showByDueDate();
      findPastDue();
      formatDatesDueView();
    }
    // Display by Priority
    if (
      event.key === "Enter" &&
      priorityBtn.classList.contains("priority-tab")
    ) {
      sortByPriority();
      replacePriorityRows();
      showByPriority();
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
        displayToDoEntry();
        findPastDue();
        formatDatesCategory();
        replaceCompletedRows();
        showCompletedTasks();

        if (dueDateBtn.classList.contains("btn-ctrl--active")) {
          sortByDueDate();
          replaceDueDateRows();
          showByDueDate();
          findPastDue();
          formatDatesDueView();
        }
        if (priorityBtn.classList.contains("btn-ctrl--active")) {
          sortByPriority();
          replacePriorityRows();
          showByPriority();
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
        createCategorySection();
        replaceToDoItems();
        displayToDoEntry();
        findPastDue();
        formatDatesCategory();
      }
    });

    // Display Form to edit To Do entry
    const editIcon = parseInt(event.target.dataset.edit);
    const editIconCat = event.target.dataset.editCat;
    const editBtns = Array.from(document.querySelectorAll("[data-edit"));
    editBtns.forEach((edit) => {
      if (event.target === edit) {
        console.log(typeof editIcon);
        showFormWithInfo(editIcon, editIconCat);
      }
    });
  });
}

export function handleEventDelegationWithKeyboard() {
  contentBox.addEventListener("keydown", function (event) {
    //Display To Do Entry Form
    const addBtn = event.target.dataset.category;
    const addBtns = Array.from(document.querySelectorAll("[data-category"));
    addBtns.forEach((button) => {
      if (event.key === "Enter" && event.target === button) {
        toDoFormDisplay(addBtn);
      }
    });

    // Delete To Do Items
    const deleteToDoItem = event.target.dataset.itemDelete;
    const toDoEntries = Array.from(
      document.querySelectorAll(["[data-item-delete]"])
    );
    toDoEntries.forEach((entry) => {
      if (event.key === "Enter" && event.target === entry) {
        removeToDoFromCategory(deleteToDoItem);
        sortByCreationDate();
        replaceToDoItems();
        displayToDoEntry();
        findPastDue();
        formatDatesCategory();
        replaceCompletedRows();
        showCompletedTasks();

        if (dueDateBtn.classList.contains("btn-ctrl--active")) {
          sortByDueDate();
          replaceDueDateRows();
          showByDueDate();
          findPastDue();
          formatDatesDueView();
        }
        if (priorityBtn.classList.contains("btn-ctrl--active")) {
          sortByPriority();
          replacePriorityRows();
          showByPriority();
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
      if (event.key === "Enter" && event.target === btn) {
        removeCategory(deleteCategoryIndex, deleteCategoryName);
        replaceCategorySections();
        createCategorySection();
        replaceToDoItems();
        displayToDoEntry();
        findPastDue();
        formatDatesCategory();
      }
    });

    // Display Form to edit To Do entry
    const editIcon = parseInt(event.target.dataset.edit);
    const editBtns = Array.from(document.querySelectorAll("[data-edit"));
    editBtns.forEach((edit) => {
      if (event.key === "Enter" && event.target === edit) {
        console.log(typeof editIcon);
        showFormWithInfo(editIcon);
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
    showCompletedTasks();
    replaceToDoItems();
    displayToDoEntry();
    findPastDue();
    formatDatesCategory();

    if (dueDateBtn.classList.contains("btn-ctrl--active")) {
      sortByDueDate();
      replaceDueDateRows();
      showByDueDate();
      findPastDue();
      formatDatesDueView();
    }
    if (priorityBtn.classList.contains("btn-ctrl--active")) {
      sortByPriority();
      replacePriorityRows();
      showByPriority();
      findPastDue();
      formatDatesPriority();
    }
  });
}
