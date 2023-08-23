import tabControls from "./tabControl";
import {
  selectActionForm,
  showCategoryForm,
  showCategoryWarning,
  hideCategoryWarning,
  cancelCategoryForm,
  submitNewCategory,
  submitToDo,
  cancelToDo,
  displayByView,
  handleEventDelegation,
  handleEventDelegationWithKeyboard,
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

  selectActionForm();
  showCategoryForm();
  showCategoryWarning();
  hideCategoryWarning();
  cancelCategoryForm();
  submitNewCategory();
  submitToDo();
  cancelToDo();
  displayByView();
  handleEventDelegation();
  handleEventDelegationWithKeyboard();
  markComplete();
});
