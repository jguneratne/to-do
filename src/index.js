import tabControls from "./tabControl";
import {
  buildFromStorage,
  selectActionForm,
  showCategoryForm,
  showCategoryWarning,
  hideCategoryWarning,
  cancelCategoryForm,
  submitNewCategory,
  submitToDo,
  cancelToDo,
  displayByView,
  displayByViewWithKeyboard,
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

  buildFromStorage();
  selectActionForm();
  showCategoryForm();
  showCategoryWarning();
  hideCategoryWarning();
  cancelCategoryForm();
  submitNewCategory();
  submitToDo();
  cancelToDo();
  displayByView();
  displayByViewWithKeyboard();
  handleEventDelegation();
  handleEventDelegationWithKeyboard();
  markComplete();
});
