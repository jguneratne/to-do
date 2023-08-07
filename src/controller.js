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

export function showToDoForm() {
  categorySection.addEventListener("click", function (event) {
    const toDoBtns = Array.from(document.querySelectorAll("[data-category"));
    const btnClick = event.target.dataset.category;
    toDoBtns.forEach((button) => {
      if (event.target === button) {
        toDoFormDisplay(btnClick);
      }
    });
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

export function deleteToDoItem() {
  const toDoParent = document.querySelector(".content-box");

  toDoParent.addEventListener("pointerdown", (e) => {
    removeToDo();
    console.log(toDoItems);
    replaceToDoItems();
    displayToDoEntry(toDoItems);
  });
}
