import { toDoItems } from "./model";
import {
  addCatMsg,
  categoryFormBox,
  categoryForm,
  categoryTab,
  categorySection,
  sideNav,
  toDoFormContainer,
  categoryName,
  toDoForm,
} from "./querySelectors";

export function newCategoryForm() {
  addCatMsg.style.display = "block";
  categoryFormBox.style.display = "initial";
  categoryTab.classList.add("tab-content--active");

  if (categoryFormBox.style.display === "initial") {
    sideNav.classList.add("cat-form-visible");
  }
}

export function hideCategoryForm() {
  categoryFormBox.style.display = "none";
  categoryForm.reset();
  addCatMsg.style.display = "initial";
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

export function toDoFormDisplay(addBtn) {
  console.log(addBtn);
  categoryName.textContent = addBtn;
  toDoFormContainer.style.display = "initial";
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

    const toDoDetails = document.createElement("p");
    toDoDetails.className = "details";
    toDoDetails.textContent = toDoItems[i].description;

    // !!! Figure out how to use date-fns to format dueDate
    const toDoDueDate = document.createElement("p");
    toDoDueDate.className = "due-date";
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
    deleteIconDiv.setAttribute("data-delete", i);

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "../src/assets/imgs/trash.svg";
    deleteIcon.setAttribute("data-delete", i);

    catContentDivs.forEach((div) => {
      if (toDoItems[i].category === div.dataset.content) {
        console.log(div.dataset.content);

        div.appendChild(toDoEntry);
        toDoEntry.appendChild(toDoTitle);
        toDoEntry.appendChild(toDoDetails);
        toDoEntry.appendChild(toDoDueDate);
        toDoEntry.appendChild(completedDiv);
        completedDiv.appendChild(completedCheckLabel);
        completedDiv.appendChild(completedCheck);
        toDoEntry.appendChild(deleteIconDiv);
        deleteIconDiv.appendChild(deleteIcon);
      }
    });
  }
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
  if (
    addCatMsg.style.display === "none" &&
    categorySection.hasChildNodes() === false
  ) {
    addCatMsg.style.display = "initial";
  }

  // let childCheck = categorySection.hasChildNodes();
  // console.log(childCheck);
  // if (childCheck === false) {
  //   addCatMsg.style.display = "block";
  // }
}
