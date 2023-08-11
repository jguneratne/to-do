import { toDoItems } from "./model";
import {
  addCategoryMsg,
  categoryFormBox,
  categoryForm,
  categoryTab,
  categorySection,
  sideNav,
  toDoFormContainer,
  categoryName,
  toDoForm,
} from "./querySelectors";
import { limitDatePicker, findPastDue } from "./dates";

export function newCategoryForm() {
  addCategoryMsg.style.display = "none";
  categoryFormBox.style.display = "initial";
  categoryTab.classList.add("tab-content--active");

  if (categoryFormBox.style.display === "initial") {
    sideNav.classList.add("cat-form-visible");
  }
}

export function hideCategoryForm() {
  categoryFormBox.style.display = "none";
  categoryForm.reset();
  addCategoryMsg.style.display = "initial";
  sideNav.classList.remove("cat-form-visible");
}

export function createCategorySection(categories) {
  for (let i = 0; i < categories.length; i++) {
    const categoryCard = document.createElement("div");
    categoryCard.className = "cat-card";
    categoryCard.setAttribute("data-cat-num", i);

    const cardCategoryName = document.createElement("h2");
    cardCategoryName.className = "cat-name";
    cardCategoryName.textContent = `${categories[i]}`;

    const categoryContent = document.createElement("div");
    categoryContent.className = "cat-content";
    categoryContent.dataset.content = categories[i];

    const addItemBtn = document.createElement("button");
    addItemBtn.type = "button";
    addItemBtn.className = "new-to-do";
    addItemBtn.id = "add-item";
    addItemBtn.value = "add-item";
    addItemBtn.setAttribute("data-category", categories[i]);
    addItemBtn.textContent = "Add Item";

    const deleteIconContainer = document.createElement("div");
    deleteIconContainer.className = "delete-icon";
    deleteIconContainer.setAttribute("data-delete-cat", categories[i]);
    deleteIconContainer.setAttribute("data-delete-cat-index", i);

    const deleteBtnImg = document.createElement("img");
    deleteBtnImg.src = "../src/assets/imgs/trash.svg";
    deleteBtnImg.setAttribute("data-delete-cat", categories[i]);
    deleteBtnImg.setAttribute("data-delete-cat-index", i);

    categorySection.appendChild(categoryCard);
    categoryCard.appendChild(cardCategoryName);
    categoryCard.appendChild(categoryContent);
    categoryCard.appendChild(addItemBtn);
    categoryCard.appendChild(deleteIconContainer);
    deleteIconContainer.appendChild(deleteBtnImg);
  }
}

export function replaceCategorySections() {
  // Replaces all category sections on each new category creation to prevent duplicates
  while (categorySection.firstChild) {
    categorySection.removeChild(categorySection.firstChild);
  }
}

export function toDoFormDisplay(addBtn, minDate) {
  console.log(addBtn);
  categoryName.textContent = addBtn;

  toDoFormContainer.style.display = "initial";
  limitDatePicker();
}

export function hideToDoForm() {
  toDoFormContainer.style.display = "none";
  toDoForm.reset();
}

export function displayToDoEntry(toDoItems) {
  for (let i = 0; i < toDoItems.length; i++) {
    const catContentDivs = document.querySelectorAll(".cat-content");

    const toDoEntry = document.createElement("div");
    toDoEntry.className = "to-do-entry";
    toDoEntry.setAttribute("data-entry", i);

    const toDoTitle = document.createElement("h3");
    toDoTitle.className = "title";
    toDoTitle.textContent = toDoItems[i].title;

    const toDoDetailsTitle = document.createElement("div");
    toDoDetailsTitle.className = "details-title";
    toDoDetailsTitle.textContent = "Details:";
    if (toDoItems[i].description === "") {
      toDoDetailsTitle.style.display = "none";
    }

    const toDoDetails = document.createElement("p");
    toDoDetails.className = "details";
    toDoDetails.textContent = toDoItems[i].description;

    const toDoDueDateTitle = document.createElement("div");
    toDoDueDateTitle.className = "due-title";
    toDoDueDateTitle.textContent = "Due Date:";

    const toDoDueDate = document.createElement("p");
    toDoDueDate.className = "show-due-date";
    toDoDueDate.textContent = toDoItems[i].dueDate;

    const completedDiv = document.createElement("div");
    completedDiv.className = "complete-container";

    const completedCheckLabel = document.createElement("label");
    completedCheckLabel.setAttribute("for", "complete");
    completedCheckLabel.textContent = "Complete:";

    const completedCheck = document.createElement("INPUT");
    completedCheck.setAttribute("type", "checkbox");
    completedCheck.className = "complete";
    completedCheck.name = "complete";
    completedCheck.id = "complete";
    completedCheck.value = "complete";
    completedCheck.checked = false;
    completedCheck.setAttribute("data-check", i);

    const deleteIconDiv = document.createElement("div");
    deleteIconDiv.className = "delete-icon";

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "../src/assets/imgs/trash.svg";
    deleteIcon.setAttribute("data-delete", i);

    const priorityDiv = document.createElement("div");
    priorityDiv.className = "priority";

    const priorityColor = document.createElement("div");
    priorityColor.className = "priority-color";
    priorityColor.style.border = "1px solid #535347";
    if (toDoItems[i].priority.toLowerCase() === "low") {
      priorityColor.style.backgroundColor = "#e7f24f";
    } else if (toDoItems[i].priority.toLowerCase() === "medium") {
      priorityColor.style.backgroundColor = "#eeb250";
    } else if (toDoItems[i].priority.toLowerCase === "high") {
      priorityColor.style.backgroundColor = "#bc2702";
    }

    catContentDivs.forEach((div) => {
      if (toDoItems[i].category === div.dataset.content) {
        console.log(div.dataset.content);

        div.appendChild(toDoEntry);
        toDoEntry.appendChild(toDoTitle);
        toDoEntry.appendChild(toDoDetailsTitle);
        toDoEntry.appendChild(toDoDetails);
        toDoEntry.appendChild(toDoDueDateTitle);
        toDoEntry.appendChild(toDoDueDate);
        toDoEntry.appendChild(completedDiv);
        completedDiv.appendChild(completedCheckLabel);
        completedDiv.appendChild(completedCheck);
        toDoEntry.appendChild(deleteIconDiv);
        deleteIconDiv.appendChild(deleteIcon);
        toDoEntry.appendChild(priorityDiv);
        priorityDiv.appendChild(priorityColor);
      }
    });
  }
  findPastDue();
}

export function replaceToDoItems() {
  // Replaces all To Do Items on each new item creation to prevent duplicates
  let toDoParents = document.querySelectorAll(".cat-content");
  toDoParents.forEach((parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  });
}

export function showCatMessage() {
  console.log(categorySection.hasChildNodes());
  if (categorySection.hasChildNodes() === false) {
    addCategoryMsg.style.display = "initial";
  }
}
