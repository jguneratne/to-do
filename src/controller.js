import {
  addBtn,
  categoryForm,
  cancelCategoryBtn,
  categorySection,
  toDoForm,
  cancelToDoBtn,
} from "./querySelectors";
import {
  showCatMessage,
  newCategoryForm,
  hideCategoryForm,
  replaceCategorySections,
  createCategorySection,
  toDoFormDisplay,
  hideToDoForm,
  displayToDoEntry,
  replaceToDoItems,
} from "./view";
import {
  categories,
  newCategoryArray,
  newToDoItem,
  toDoItems,
  removeToDo,
  removeCategory,
  changeCompleteStatus,
} from "./model";
import { formatDateTimes } from "./dates";

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
    formatDateTimes();
  });
}

export function submitToDo() {
  toDoForm.addEventListener("submit", (e) => {
    const targetCategory = e.target.dataset.category;
    console.log(targetCategory);
    e.preventDefault();
    newToDoItem();
    hideToDoForm();
    replaceToDoItems();
    displayToDoEntry(toDoItems);
    formatDateTimes();
  });
}

export function cancelToDo() {
  cancelToDoBtn.addEventListener("pointerdown", hideToDoForm);
}

export function handleCategoryEvents() {
  categorySection.addEventListener("pointerdown", function (event) {
    const addBtn = event.target.dataset.category;
    const deleteToDo = event.target.dataset.delete;
    const deleteCategoryIndex = event.target.dataset.deleteCatIndex;
    const deleteCategory = event.target.dataset.deleteCat;

    // console.log(addBtn);
    // console.log(deleteToDo);
    // console.log(deleteCategory);

    const addBtns = Array.from(document.querySelectorAll("[data-category"));
    addBtns.forEach((button) => {
      if (event.target === button) {
        toDoFormDisplay(addBtn);
      }
    });

    const toDoEntries = Array.from(
      document.querySelectorAll(["[data-delete]"])
    );
    toDoEntries.forEach((entry) => {
      if (event.target === entry) {
        removeToDo(deleteToDo);
        replaceToDoItems();
        displayToDoEntry(toDoItems);
        formatDateTimes();
      }
    });

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
        formatDateTimes();
        showCatMessage();
      }
    });
  });
}

export function checkComplete() {
  categorySection.addEventListener("change", (event) => {
    const taskIndex = event.target.dataset.check;

    if (event.target === taskIndex);
    changeCompleteStatus(taskIndex);
    replaceToDoItems();
    displayToDoEntry(toDoItems);
    formatDateTimes();
  });
}
