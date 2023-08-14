import { addBtn, returnToCatTab } from "./querySelectors";

export default function tabControls() {
  document.querySelectorAll(".btn-ctrl").forEach((button) => {
    button.addEventListener("click", () => {
      const btnContainer = document.querySelector(".container");
      const clickedBtn = button.dataset.forTab;
      const tabContainer = document.querySelector(".content-box");
      const activeTab = tabContainer.querySelector(
        `.tab-content[data-tab="${clickedBtn}"]`
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

      if (addBtn.classList.contains("btn-ctrl--active")) {
        addBtn.classList.remove("btn-ctrl--active");
        returnToCatTab.classList.add("btn-ctrl--active");
      }
    });
  });
}
