import tabControls from "./tabControl";
import showCategoryForm from "./controller";

document.addEventListener("DOMContentLoaded", () => {
  tabControls();

  document.querySelectorAll(".side-nav").forEach((tabBtn) => {
    tabBtn.querySelector(".tab-btn").click();
  });

  document.querySelectorAll(".content-box").forEach((tabContent) => {
    tabContent.querySelector(".tab-content").click();
  });

  showCategoryForm();
});
