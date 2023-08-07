import { addBtn, categoryTab } from "./querySelectors";
import tabControls from "./tabControl";
import {
  showCategoryForm,
  cancelCategoryForm,
  submitNewCategory,
  showToDoForm,
  submitToDo,
  deleteToDoItem,
  deleteCategory,
} from "./controller";

document.addEventListener("DOMContentLoaded", () => {
  tabControls();

  document.querySelectorAll(".container").forEach((tabBtn) => {
    tabBtn.querySelector(".btn-ctrl").click();
  });

  document.querySelectorAll(".content-box").forEach((tabContent) => {
    tabContent.querySelector(".tab-content").click();

    if (addBtn.classList.contains("btn-ctrl--active")) {
      addBtn.classList.remove("btn-ctrl--active");
      categoryTab.classList.add("btn-ctrl--active");
    }
  });

  showCategoryForm();
  cancelCategoryForm();
  submitNewCategory();
  showToDoForm();
  submitToDo();
  deleteToDoItem();
  deleteCategory();
});
