import {
  addCatMsg,
  categoryFormBox,
  categoryForm,
  categoryTab,
  categorySection,
  sideNav,
  toDoFormContainer,
  categoryName,
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
  categoryName.textContent = clickedBtn.dataset.category;
  toDoFormContainer.style.display = "initial";
}
