import {
  addBtn,
  categoryForm,
  cancelCategoryBtn,
  categorySection,
  toDoForm,
} from "./querySelectors";
import {
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
  toDoForm.addEventListener("submit", (e) => {
    const targetCategory = e.target.dataset.category;
    console.log(targetCategory);
    e.preventDefault();
    newToDoItem();
    hideToDoForm();
    replaceToDoItems();
    displayToDoEntry(toDoItems);
  });
}

export function handleCategoryEvents() {
  categorySection.addEventListener("pointerdown", function (event) {
    const addBtn = event.target.dataset.category;
    const deleteToDo = event.target.dataset.delete;
    const deleteCategory = event.target.dataset.deleteCat;

    console.log(addBtn);
    console.log(deleteToDo);
    console.log(deleteCategory);

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
      }
    });

    const deleteCatBtns = Array.from(
      document.querySelectorAll("[data-delete-cat")
    );
    deleteCatBtns.forEach((btn) => {
      if (event.target === btn) {
        removeCategory(deleteCategory);
        replaceCategorySections();
        createCategorySection(categories);
        replaceToDoItems();
        displayToDoEntry(toDoItems);
      }
    });
  });
}
