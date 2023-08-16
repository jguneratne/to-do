import {
  contentBox,
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
  completedTabContent,
  completedBtn,
  sideNav,
} from "./querySelectors";
import {
  // showCatMessage,
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
  categories,
  newCategoryArray,
  newToDoItem,
  editToDo,
  toDoItems,
  removeToDoFromCategory,
  removeToDoFromCompleted,
  removeCategory,
  changeCompleteStatus,
  completedTasks,
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

export function showCategoryForm() {
  addBtn.addEventListener("pointerdown", newCategoryForm);
}

export function cancelCategoryForm() {
  cancelCategoryBtn.addEventListener("pointerdown", hideCategoryForm);
}

export function submitNewCategory() {
  categoryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    newCategoryArray();
    hideCategoryForm();
    replaceCategorySections();
    createCategorySection(categories);
    replaceToDoItems();
    displayToDoEntry(toDoItems);
  });
}

export function submitToDo() {
  toDoForm.addEventListener("pointerdown", (e) => {
    if (e.target === addToDoBtn) {
      newToDoItem();
      sortByCreationDate();
      hideToDoForm();
      replaceToDoItems();
      displayToDoEntry(toDoItems);
      findPastDue();
      formatDatesCategory();
    }

    if (e.target === editToDoBtn) {
      editToDo();
      sortByCreationDate();
      hideToDoForm();
      replaceToDoItems();
      displayToDoEntry(toDoItems);
      findPastDue();
      formatDatesCategory();
    }
  });
}

export function cancelToDo() {
  cancelToDoBtn.addEventListener("pointerdown", hideToDoForm);
}

export function displayByView() {
  sideNav.addEventListener("pointerdown", (event) => {
    // Display by Category
    if (categoryBtn.classList.contains("cat-tab")) {
      sortByCreationDate();
      replaceToDoItems();
      displayToDoEntry(toDoItems);
      findPastDue();
      formatDatesCategory();
    }
    // Display by Due Date
    if (dueDateBtn.classList.contains("date-tab")) {
      sortByDueDate();
      replaceDueDateRows();
      showByDueDate(toDoItems);
      findPastDue();
      formatDatesDueView();
    }
    // Display by Priority
    if (priorityBtn.classList.contains("priority-tab")) {
      sortByPriority();
      replacePriorityRows();
      showByPriority(toDoItems);
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
    const deleteCompToDo = event.target.dataset.compDelete;
    const toDoEntries = Array.from(
      document.querySelectorAll(["[data-item-delete]"])
    );
    const completeToDoEntries = Array.from(
      document.querySelectorAll(["[data-comp-delete]"])
    );
    toDoEntries.forEach((entry) => {
      if (event.target === entry) {
        removeToDoFromCategory(deleteToDoItem);
        replaceToDoItems();
        displayToDoEntry(toDoItems);
        findPastDue();
        formatDatesCategory();
      }
    });
    completeToDoEntries.forEach((compEntry) => {
      if (event.target === compEntry) {
        removeToDoFromCompleted(deleteCompToDo);
        replaceCompletedRows();
        showCompletedTasks(completedTasks);
      }
    });

    // Delete Category with any and all entries
    const deleteCategoryIndex = event.target.dataset.deleteCatIndex;
    const deleteCategory = event.target.dataset.deleteCat;
    const deleteCatBtns = Array.from(
      document.querySelectorAll("[data-delete-cat")
    );
    deleteCatBtns.forEach((btn) => {
      if (event.target === btn) {
        removeCategory(deleteCategoryIndex, deleteCategory);
        replaceCategorySections();
        createCategorySection(categories);
        replaceToDoItems();
        displayToDoEntry(toDoItems);
        findPastDue();
        formatDatesCategory();
        // showCatMessage();
      }
    });

    // Display Form to edit To Do entry
    const editBtn = event.target.dataset.edit;
    const editBtns = Array.from(document.querySelectorAll("[data-edit"));
    editBtns.forEach((edit) => {
      if (event.target === edit) {
        console.log(editBtn);
        showFormWithInfo(editBtn, toDoItems);
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
    showCompletedTasks(completedTasks);
    replaceToDoItems();
    displayToDoEntry(toDoItems);
    findPastDue();
    formatDatesCategory();

    if (dueDateBtn.classList.contains("btn-ctrl--active")) {
      sortByDueDate();
      replaceDueDateRows();
      showByDueDate(toDoItems);
      findPastDue();
      formatDatesDueView();
    }
    if (priorityBtn.classList.contains("btn-ctrl--active")) {
      sortByPriority();
      replacePriorityRows();
      showByPriority(toDoItems);
      findPastDue();
      formatDatesPriority();
    }
    if (completedBtn.classList.contains("btn-ctrl--active")) {
      changeCompleteStatus(taskIndex);
      replaceCompletedRows();
      showCompletedTasks(completedTasks);
    }
  });
}
