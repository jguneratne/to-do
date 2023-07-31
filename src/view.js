import {
  categoryFormBox,
  categoryForm,
  categoryTab,
  categorySection,
  sideNav,
} from "./querySelectors";

export function newCategoryForm() {
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

    const categoryName = document.createElement("h2");
    categoryName.className = "cat-name";
    categoryName.textContent = `${categories[i]}`;

    const addItemBtn = document.createElement("button");
    addItemBtn.className = "new-category";
    addItemBtn.textContent = "Add Item";

    categorySection.appendChild(categoryCard);
    categoryCard.appendChild(categoryName);
    categoryCard.appendChild(addItemBtn);
  }
}

export function replaceCategorySections() {
  // Replaces all category sections on each new category creation to prevent duplicates
  while (categorySection.firstChild) {
    categorySection.removeChild(categorySection.firstChild);
  }
}
