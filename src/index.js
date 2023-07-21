import tabControls from "./tabControl";
// import showCategoryForm from "./controller";

document.addEventListener("DOMContentLoaded", () => {
  tabControls();

  document.querySelectorAll(".container").forEach((tabBtn) => {
    tabBtn.querySelector(".btn-ctrl").click();
  });

  document.querySelectorAll(".content-box").forEach((tabContent) => {
    tabContent.querySelector(".tab-content").click();

    const addBtn = document.querySelector(".show-form-btn");
    const categoryTab = document.querySelector(".cat-tab");

    if (addBtn.classList.contains("btn-ctrl--active")) {
      addBtn.classList.remove("btn-ctrl--active");
      categoryTab.classList.add("btn-ctrl--active");
    }
  });

  //   showCategoryForm();
});
