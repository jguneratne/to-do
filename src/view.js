import { editToDo } from "./model";
import {
  addCategoryMsg,
  selectAddTypeDiv,
  categoryWarning,
  categoryFormBox,
  categoryForm,
  categoryTab,
  categorySection,
  sideNav,
  toDoFormContainer,
  toDoForm,
  categoryName,
  toDoTitle,
  toDoPriority,
  toDoDescription,
  toDoDueDate,
  addToDoBtn,
  editToDoBtn,
  dueDateTaskDiv,
  priorityTaskDiv,
  completedTasksDiv,
} from "./querySelectors";
import { limitDatePicker } from "./dates";

export function selectAddType() {
  addCategoryMsg.style.display = "none";
  selectAddTypeDiv.style.display = "initial";
  if (selectAddTypeDiv.style.display === "initial") {
    sideNav.classList.add("cat-form-visible");
  } else {
    sideNav.classList.remove("cat-form-visible");
  }
}

export function displayCategoryWarning() {
  categoryWarning.style.display = "initial";
  selectAddTypeDiv.style.display = "none";
}

export function closeToDoWarning() {
  categoryWarning.style.display = "none";
  categoryFormBox.style.display = "initial";
}

export function closeSelectionBox() {
  selectAddTypeDiv.style.display = "none";
}

export function newCategoryForm() {
  selectAddTypeDiv.style.display = "none";
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

export function createCategorySection(categoriesArray) {
  addCategoryMsg.style.display = "none";

  console.log(categoriesArray);

  for (let i = 0; i < categoriesArray.length; i++) {
    const categoryCard = document.createElement("div");
    categoryCard.className = "cat-card";
    categoryCard.setAttribute("data-cat-num", i);

    const cardCategoryName = document.createElement("h2");
    cardCategoryName.className = "cat-name";
    cardCategoryName.textContent = `${categoriesArray[i]}`;

    const categoryContent = document.createElement("div");
    categoryContent.className = "cat-content";
    categoryContent.dataset.content = `${categoriesArray[i]}`;

    const addItemBtn = document.createElement("button");
    addItemBtn.type = "button";
    addItemBtn.className = "new-to-do";
    addItemBtn.id = "add-item";
    addItemBtn.value = "add-item";
    addItemBtn.setAttribute("data-category", `${categoriesArray[i]}`);
    addItemBtn.textContent = "Add Item";

    const deleteIconContainer = document.createElement("div");
    deleteIconContainer.className = "delete-icon";
    deleteIconContainer.setAttribute(
      "data-delete-cat",
      `${categoriesArray[i]}`
    );
    deleteIconContainer.setAttribute("data-delete-cat-index", i);

    const deleteBtnImg = document.createElement("img");
    deleteBtnImg.src = "../src/assets/imgs/trash.svg";
    deleteBtnImg.setAttribute("data-delete-cat", `${categoriesArray[i]}`);
    deleteBtnImg.setAttribute("data-delete-cat-index", i);
    deleteBtnImg.setAttribute("focusable", true);
    deleteBtnImg.setAttribute("tabindex", 0);

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
  toDoFormContainer.scrollTo(0, 0);
  addToDoBtn.style.display = "initial";
  editToDoBtn.style.display = "none";
  limitDatePicker();
}

export function showFormWithInfo(editBtnIndex, toDoItemsArray) {
  for (let i = 0; i < toDoItemsArray.length; i++) {
    toDoFormContainer.style.display = "initial";
    toDoFormContainer.scrollTo(0, 0);
    addToDoBtn.style.display = "none";
    editToDoBtn.style.display = "initial";
    limitDatePicker();

    if (
      parseInt(editBtnIndex) ===
      parseInt(toDoItemsArray.indexOf(toDoItemsArray[i]))
    ) {
      categoryName.textContent = toDoItemsArray[i].category;
      toDoTitle.value = toDoItemsArray[i].title;
      toDoPriority.value = toDoItemsArray[i].priority;
      toDoDescription.value = toDoItemsArray[i].description;
      toDoDueDate.value = toDoItemsArray[i].dueDate;
    }

    const entryIndex = toDoItemsArray.indexOf(toDoItemsArray[i]);
    editToDo(entryIndex);
    editToDoInStorage(entryIndex);
  }
}

export function hideToDoForm() {
  toDoFormContainer.style.display = "none";
  toDoForm.reset();
}

export function displayToDoEntry(toDoItemsArray) {
  for (let i = 0; i < toDoItemsArray.length; i++) {
    if (toDoItemsArray[i].completedTask === false) {
      const catContentDivs = document.querySelectorAll(".cat-content");

      const toDoEntry = document.createElement("div");
      toDoEntry.className = "to-do-entry";
      toDoEntry.setAttribute("data-entry", i);

      const toDoTitle = document.createElement("h3");
      toDoTitle.className = "title";
      toDoTitle.textContent = toDoItemsArray[i].title;

      const toDoDetailsTitle = document.createElement("div");
      toDoDetailsTitle.className = "details-title";
      toDoDetailsTitle.textContent = "Details:";
      if (toDoItemsArray[i].description === "") {
        toDoDetailsTitle.style.display = "none";
      }

      const toDoDetails = document.createElement("p");
      toDoDetails.className = "details";
      toDoDetails.textContent = toDoItemsArray[i].description;

      const toDoDueDateTitle = document.createElement("div");
      toDoDueDateTitle.className = "due-title";
      toDoDueDateTitle.textContent = "Due Date:";

      const toDoDueDate = document.createElement("p");
      toDoDueDate.className = "show-due-date";
      toDoDueDate.textContent = toDoItemsArray[i].dueDate;

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
      deleteIcon.alt = "Delete Entry";
      deleteIcon.setAttribute("data-item-delete", i);
      deleteIcon.setAttribute("focusable", true);
      deleteIcon.setAttribute("tabindex", 0);

      const priorityDiv = document.createElement("div");
      priorityDiv.className = "priority";

      const priorityColor = document.createElement("div");
      priorityColor.className = "priority-color";
      priorityColor.style.border = "1px solid #535347";
      if (toDoItemsArray[i].priority.toLowerCase() === "low") {
        priorityColor.style.backgroundColor = "#e7f24f";
      } else if (toDoItemsArray[i].priority.toLowerCase() === "medium") {
        priorityColor.style.backgroundColor = "#eeb250";
      } else if (toDoItemsArray[i].priority.toLowerCase === "high") {
        priorityColor.style.backgroundColor = "#bc2702";
      }

      const editIcon = document.createElement("img");
      editIcon.className = "edit-btn";
      editIcon.src = "../src/assets/imgs/edit-button-svgrepo-com.svg";
      editIcon.alt = "Edit Entry";
      editIcon.setAttribute("data-edit", i);
      editIcon.setAttribute("focusable", true);
      editIcon.setAttribute("tabindex", 0);

      catContentDivs.forEach((div) => {
        if (toDoItemsArray[i].category === div.dataset.content) {
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
          priorityDiv.appendChild(editIcon);
        }
      });
    }
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

export function showByDueDate(toDoItemsArray) {
  for (let i = 0; i < toDoItemsArray.length; i++) {
    if (toDoItemsArray[i].completedTask === false) {
      const dueDateTasksRowDiv = document.createElement("div");
      dueDateTasksRowDiv.className = "due-tasks-row-parent";

      const dueDateTasksRow = document.createElement("div");
      dueDateTasksRow.className = "due-view-row";

      const dueViewDueDate = document.createElement("div");
      dueViewDueDate.className = "due-view-due show-date-due";
      dueViewDueDate.textContent = toDoItemsArray[i].dueDate;
      dueViewDueDate.style.borderRight = "0.2ch solid black";
      dueViewDueDate.style.textAlign = "center";

      const dueDateTitle = document.createElement("div");
      dueDateTitle.className = "grid-cells .due-view-title";
      dueDateTitle.textContent = toDoItemsArray[i].title;

      const dueDateDescription = document.createElement("div");
      dueDateDescription.className = "grid-cells .due-view-description";
      if (toDoItemsArray[i].description !== "") {
        dueDateDescription.textContent = toDoItemsArray[i].description;
      } else {
        dueDateDescription.textContent = "----";
      }

      const dueDatePriority = document.createElement("div");
      dueDatePriority.className = "grid-cells .due-view-priority";
      const dueDatePriorityColor = document.createElement("div");
      dueDatePriorityColor.className = "priority-color";
      dueDatePriorityColor.style.border = "1px solid #535347";
      if (toDoItemsArray[i].priority.toLowerCase() === "low") {
        dueDatePriorityColor.style.backgroundColor = "#e7f24f";
      } else if (toDoItemsArray[i].priority.toLowerCase() === "medium") {
        dueDatePriorityColor.style.backgroundColor = "#eeb250";
      } else if (toDoItemsArray[i].priority.toLowerCase === "high") {
        dueDatePriorityColor.style.backgroundColor = "#bc2702";
      }

      const dueDateCheck = document.createElement("div");
      dueDateCheck.className = "grid-cells .due-view-complete";

      const dueDateLabel = document.createElement("label");
      dueDateLabel.setAttribute("for", "complete");

      const dueDateCheckbox = document.createElement("INPUT");
      dueDateCheckbox.setAttribute("type", "checkbox");
      dueDateCheckbox.className = "complete";
      dueDateCheckbox.name = "complete";
      dueDateCheckbox.id = "complete";
      dueDateCheckbox.value = "complete";
      dueDateCheckbox.checked = toDoItemsArray[i].completedTask;
      dueDateCheckbox.setAttribute("data-check", i);

      const dueDateDelete = document.createElement("div");
      dueDateDelete.className = "grid-cells .due-view-delete";

      const deleteBtnImg = document.createElement("img");
      deleteBtnImg.src = "../src/assets/imgs/trash.svg";
      deleteBtnImg.setAttribute("data-item-delete", i);

      dueDateTaskDiv.appendChild(dueDateTasksRowDiv);
      dueDateTasksRowDiv.appendChild(dueDateTasksRow);
      dueDateTasksRow.appendChild(dueViewDueDate);
      dueDateTasksRow.appendChild(dueDateTitle);
      dueDateTasksRow.appendChild(dueDateDescription);
      dueDateTasksRow.appendChild(dueDatePriority);
      dueDatePriority.appendChild(dueDatePriorityColor);
      dueDateTasksRow.appendChild(dueDateCheck);
      dueDateCheck.appendChild(dueDateLabel);
      dueDateCheck.appendChild(dueDateCheckbox);
      dueDateTasksRow.appendChild(dueDateDelete);
      dueDateDelete.appendChild(deleteBtnImg);
    }
  }
}

export function replaceDueDateRows() {
  // Replaces all rows of DueDate view to prevent duplicates

  const dueViewRows = document.querySelectorAll(".due-view-row");

  dueViewRows.forEach((row) => {
    if (row.parentNode) {
      row.parentNode.removeChild(row);
    }
  });
}

export function showByPriority(toDoItemsArray) {
  for (let i = 0; i < toDoItemsArray.length; i++) {
    if (toDoItemsArray[i].completedTask === false) {
      const priorityTasksRowDiv = document.createElement("div");
      priorityTasksRowDiv.className = "priority-tasks-row-parent";

      const priorityTasksRow = document.createElement("div");
      priorityTasksRow.className = "priority-view-row";

      const priorityViewPriority = document.createElement("div");
      priorityViewPriority.className = "grid-cells .priority-view-priority";
      const priorityViewPriorityColor = document.createElement("div");
      priorityViewPriorityColor.className = "priority-color";
      priorityViewPriorityColor.style.border = "1px solid #535347";
      if (toDoItemsArray[i].priority.toLowerCase() === "low") {
        priorityViewPriorityColor.style.backgroundColor = "#e7f24f";
      } else if (toDoItemsArray[i].priority.toLowerCase() === "medium") {
        priorityViewPriorityColor.style.backgroundColor = "#eeb250";
      } else if (toDoItemsArray[i].priority.toLowerCase === "high") {
        priorityViewPriorityColor.style.backgroundColor = "#bc2702";
      }

      const priorityTitle = document.createElement("div");
      priorityTitle.className = "grid-cells .priority-view-title";
      priorityTitle.textContent = toDoItemsArray[i].title;

      const priorityDescription = document.createElement("div");
      priorityDescription.className = "grid-cells .priority-view-description";
      if (toDoItemsArray[i].description !== "") {
        priorityDescription.textContent = toDoItemsArray[i].description;
      } else {
        priorityDescription.textContent = "----";
      }

      const priorityViewDueDate = document.createElement("div");
      priorityViewDueDate.className = "priority-view-due show-date-priority";
      priorityViewDueDate.textContent = toDoItemsArray[i].dueDate;
      priorityViewDueDate.style.borderRight = "0.2ch solid black";
      priorityViewDueDate.style.textAlign = "center";

      const priorityCheck = document.createElement("div");
      priorityCheck.className = "grid-cells .priority-view-complete";

      const priorityLabel = document.createElement("label");
      priorityLabel.setAttribute("for", "complete");

      const priorityCheckbox = document.createElement("INPUT");
      priorityCheckbox.setAttribute("type", "checkbox");
      priorityCheckbox.className = "complete";
      priorityCheckbox.name = "complete";
      priorityCheckbox.id = "complete";
      priorityCheckbox.value = "complete";
      priorityCheckbox.checked = toDoItemsArray[i].completedTask;
      priorityCheckbox.setAttribute("data-check", i);

      const priorityDelete = document.createElement("div");
      priorityDelete.className = "grid-cells .priority-view-delete";

      const deleteBtnImg = document.createElement("img");
      deleteBtnImg.src = "../src/assets/imgs/trash.svg";
      deleteBtnImg.setAttribute("data-item-delete", i);

      priorityTaskDiv.appendChild(priorityTasksRowDiv);
      priorityTasksRowDiv.appendChild(priorityTasksRow);
      priorityTasksRow.appendChild(priorityViewPriority);
      priorityViewPriority.appendChild(priorityViewPriorityColor);
      priorityTasksRow.appendChild(priorityTitle);
      priorityTasksRow.appendChild(priorityDescription);
      priorityTasksRow.appendChild(priorityViewDueDate);
      priorityTasksRow.appendChild(priorityCheck);
      priorityCheck.appendChild(priorityLabel);
      priorityCheck.appendChild(priorityCheckbox);
      priorityTasksRow.appendChild(priorityDelete);
      priorityDelete.appendChild(deleteBtnImg);
    }
  }
}

export function replacePriorityRows() {
  // Replaces all rows of priority view to prevent duplicates

  const priorityViewRows = document.querySelectorAll(".priority-view-row");

  priorityViewRows.forEach((row) => {
    if (row.parentNode) {
      row.parentNode.removeChild(row);
    }
  });
}

export function showCompletedTasks(toDoItemsArray) {
  for (let i = 0; i < toDoItemsArray.length; i++) {
    if (toDoItemsArray[i].completedTask === true) {
      const completedTasksRowDiv = document.createElement("div");
      completedTasksRowDiv.className = "completed-tasks-row-parent";

      const completedTasksRow = document.createElement("div");
      completedTasksRow.className = "completed-tasks-row";

      const gridCellsCheck = document.createElement("div");
      gridCellsCheck.className = "grid-cells .complete-view-complete";

      const completedLabel = document.createElement("label");
      completedLabel.setAttribute("for", "complete");

      const completedCheckbox = document.createElement("INPUT");
      completedCheckbox.setAttribute("type", "checkbox");
      completedCheckbox.className = "complete";
      completedCheckbox.name = "complete";
      completedCheckbox.id = "complete";
      completedCheckbox.value = "complete";
      completedCheckbox.checked = toDoItemsArray[i].completedTask;
      completedCheckbox.setAttribute("data-check", i);

      const gridCellsTitle = document.createElement("div");
      gridCellsTitle.className = "grid-cells .complete-view-title";
      gridCellsTitle.textContent = toDoItemsArray[i].title;

      const gridCellsDescription = document.createElement("div");
      gridCellsDescription.className = "grid-cells .complete-view-description";
      if (toDoItemsArray[i].description !== "") {
        gridCellsDescription.textContent = toDoItemsArray[i].description;
      } else {
        gridCellsDescription.textContent = "----";
      }

      const gridCellsPriority = document.createElement("div");
      gridCellsPriority.className = "grid-cells .complete-view-priority";

      const gridCellsPriorityColor = document.createElement("div");
      gridCellsPriorityColor.className = "priority-color";
      gridCellsPriorityColor.style.border = "1px solid #535347";
      if (toDoItemsArray[i].priority.toLowerCase() === "low") {
        gridCellsPriorityColor.style.backgroundColor = "#e7f24f";
      } else if (toDoItemsArray[i].priority.toLowerCase() === "medium") {
        gridCellsPriorityColor.style.backgroundColor = "#eeb250";
      } else if (toDoItemsArray[i].priority.toLowerCase === "high") {
        gridCellsPriorityColor.style.backgroundColor = "#bc2702";
      }

      const gridCellsDelete = document.createElement("div");
      gridCellsDelete.className = "grid-cells .complete-view-delete";

      const deleteBtnImg = document.createElement("img");
      deleteBtnImg.src = "../src/assets/imgs/trash.svg";
      deleteBtnImg.setAttribute("data-item-delete", i);

      completedTasksDiv.appendChild(completedTasksRowDiv);
      completedTasksRowDiv.appendChild(completedTasksRow);
      completedTasksRow.appendChild(gridCellsCheck);
      gridCellsCheck.appendChild(completedLabel);
      gridCellsCheck.appendChild(completedCheckbox);
      completedTasksRow.appendChild(gridCellsTitle);
      completedTasksRow.appendChild(gridCellsDescription);
      completedTasksRow.appendChild(gridCellsPriority);
      gridCellsPriority.appendChild(gridCellsPriorityColor);
      completedTasksRow.appendChild(gridCellsDelete);
      gridCellsDelete.appendChild(deleteBtnImg);
    }
  }
}

export function replaceCompletedRows() {
  // Replaces all rows of Completed Tasks to prevent duplicates

  const completedTaskRows = document.querySelectorAll(".completed-tasks-row");

  completedTaskRows.forEach((row) => {
    if (row.parentNode) {
      row.parentNode.removeChild(row);
    }
  });
}
