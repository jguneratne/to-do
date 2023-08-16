import { addBtn, categoryBtn, categoryTab } from "./querySelectors";
import tabControls from "./tabControl";
import {
  showCategoryForm,
  cancelCategoryForm,
  submitNewCategory,
  submitToDo,
  cancelToDo,
  displayByView,
  handleEventDelegation,
  markComplete,
} from "./controller";

document.addEventListener("DOMContentLoaded", () => {
  tabControls();

  document.querySelectorAll(".container").forEach((tabBtn) => {
    tabBtn.querySelector(".btn-ctrl").click();
  });

  document.querySelectorAll(".content-box").forEach((tabContent) => {
    tabContent.querySelector(".tab-content").click();
  });

  showCategoryForm();
  cancelCategoryForm();
  submitNewCategory();
  submitToDo();
  cancelToDo();
  displayByView();
  handleEventDelegation();
  markComplete();
});
