import {
  contentBox,
  addBtn,
  categoryForm,
  cancelCategoryBtn,
  categorySection,
  toDoForm,
  cancelToDoBtn,
  addToDoBtn,
  editToDoBtn,
} from "./querySelectors";
import {
  //showCatMessage,
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
} from "./view";
import {
  categories,
  newCategoryArray,
  newToDoItem,
  editToDo,
  toDoItems,
  removeToDo,
  removeCategory,
  changeCompleteStatus,
  completedTasks,
} from "./model";

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
      // console.log(targetCategory);
      newToDoItem();
      hideToDoForm();
      replaceToDoItems();
      displayToDoEntry(toDoItems);
    }

    if (e.target === editToDoBtn) {
      editToDo();
      hideToDoForm();
      replaceToDoItems();
      displayToDoEntry(toDoItems);
    }
  });
}

export function cancelToDo() {
  cancelToDoBtn.addEventListener("pointerdown", hideToDoForm);
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
    const deleteToDo = event.target.dataset.delete;
    const toDoEntries = Array.from(
      document.querySelectorAll(["[data-delete]"])
    );
    toDoEntries.forEach((entry) => {
      if (event.target === entry) {
        removeToDo(deleteToDo);
        replaceToDoItems();
        displayToDoEntry(toDoItems);
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
        showCatMessage();
      }
    });

    // Show form to edit To Do entry
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

export function checkComplete() {
  contentBox.addEventListener("change", (event) => {
    const taskIndex = event.target.dataset.check;

    if (event.target === taskIndex);
    changeCompleteStatus(taskIndex);
    replaceToDoItems();
    displayToDoEntry(toDoItems);
    replaceCompletedRows();
    showCompletedTasks(completedTasks);
  });
}
