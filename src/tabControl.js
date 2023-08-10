import { addCategoryMsg, addBtn, returnToCatTab } from "./querySelectors";

export default function tabControls() {
  document.querySelectorAll(".btn-ctrl").forEach((button) => {
    button.addEventListener("click", () => {
      const btnContainer = document.querySelector(".container");
      const clickedTab = button.dataset.forTab;
      const tabContainer = document.querySelector(".content-box");
      const activeTab = tabContainer.querySelector(
        `.tab-content[data-tab="${clickedTab}"]`
      );

      //   console.log(btnContainer);
      // console.log(clickedTab);
      //   console.log(tabContainer);
      // console.log(activeTab);

      btnContainer.querySelectorAll(".btn-ctrl").forEach((tabBtn) => {
        tabBtn.classList.remove("btn-ctrl--active");
      });

      tabContainer.querySelectorAll(".tab-content").forEach((tabContent) => {
        tabContent.classList.remove("tab-content--active");
      });

      button.classList.add("btn-ctrl--active");
      activeTab.classList.add("tab-content--active");

      if (
        button.classList.contains("date-tab") ||
        button.classList.contains("completed-tab")
      ) {
        addCategoryMsg.style.display = "none";
      } else if (button.classList.contains("cat-tab")) {
        addCategoryMsg.style.display = "initial";
      }

      if (addBtn.classList.contains("btn-ctrl--active")) {
        addBtn.classList.remove("btn-ctrl--active");
        returnToCatTab.classList.add("btn-ctrl--active");
      }
    });
  });
}
