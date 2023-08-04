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
  toDoDueDate,
} from "./querySelectors";

export function newCategoryForm() {
  addCatMsg.style.display = "none";
  categoryFormBox.style.display = "initial";
  categoryTab.classList.add("tab-content--active");

  if (categoryFormBox.style.display === "initial") {
    sideNav.classList.add("cat-form-visible");
  }
}

export function hideCategoryForm() {
  categoryFormBox.style.display = "none";
  categoryForm.reset();
  sideNav.classList.remove("cat-form-visible");
}

export function createCategorySection(categories) {
  for (let i = 0; i < categories.length; i++) {
    const categoryCard = document.createElement("div");
    categoryCard.className = "cat-card";
    categoryCard.setAttribute("data-cat-num", i);

    const categoryContent = document.createElement("div");
    categoryContent.className = "cat-content";

    const categoryName = document.createElement("h2");
    categoryName.className = "cat-name";
    categoryName.textContent = `${categories[i]}`;

    const addItemBtn = document.createElement("button");
    addItemBtn.type = "button";
    addItemBtn.className = "new-to-do";
    addItemBtn.id = "add-item";
    addItemBtn.value = "add-item";
    addItemBtn.setAttribute("data-category", categories[i]);
    addItemBtn.textContent = "Add Item";

    categorySection.appendChild(categoryCard);
    categoryCard.appendChild(categoryContent);
    categoryContent.appendChild(categoryName);
    categoryCard.appendChild(addItemBtn);
  }
}

export function replaceCategorySections() {
  // Replaces all category sections on each new category creation to prevent duplicates
  while (categorySection.firstChild) {
    categorySection.removeChild(categorySection.firstChild);
  }
}

export function toDoFormDisplay(clickedBtn) {
  console.log(clickedBtn);
  categoryName.textContent = clickedBtn;
  toDoFormContainer.style.display = "initial";
}

export function hideToDoForm() {
  toDoFormContainer.style.display = "none";
  toDoForm.reset();
}

export function displayToDoEntry(toDoItems) {
  for (let i = 0; i < toDoItems.length; i++) {
    const categoryContent = document.querySelector(".cat-content");

    const toDoEntry = document.createElement("div");
    toDoEntry.className = "to-do-entry";
    toDoEntry.setAttribute("data-entry", i);

    const toDoTitle = document.createElement("h3");
    toDoTitle.className = "title";
    toDoTitle.textContent = toDoItems[i].title;

    const toDoDetails = document.createElement("p");
    toDoDetails.className = "details";
    toDoDetails.textContent = toDoItems[i].description;

    // !!! Figure out how to use date-fns for this
    const toDoDueDate = document.createElement("p");
    toDoDueDate.className = "due-date";
    toDoDueDate.textContent = toDoItems[i].dueDate;

    const completedDiv = document.createElement("div");
    completedDiv.className = "complete-container";

    const completedCheckLabel = document.createElement("label");
    completedCheckLabel.setAttribute = ("for", "complete");

    const completedCheck = document.createElement("INPUT");
    completedCheck.setAttribute("type", "checkbox");
    completedCheck.className = "complete";
    completedCheck.name = "complete";
    completedCheck.id = "complete";
    completedCheck.value = "Complete:";
    completedCheck.textContent = "Complete:";
    completedCheck.checked = toDoItems[i].completedTask;

    const deleteIconDiv = document.createElement("div");
    deleteIconDiv.className = "delete-icon";

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "../src/assets/imgs/trash.svg";

    if (toDoItems[i].category === categoryName.textContent) {
      categoryContent.appendChild(toDoEntry);
      toDoEntry.appendChild(toDoTitle);
      toDoEntry.appendChild(toDoDetails);
      toDoEntry.appendChild(toDoDueDate);
      toDoEntry.appendChild(completedDiv);
      completedDiv.appendChild(completedCheckLabel);
      completedDiv.appendChild(completedCheck);
      toDoEntry.appendChild(deleteIconDiv);
      deleteIconDiv.appendChild(deleteIcon);
    }
  }
}
