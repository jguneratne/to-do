export default function tabControls() {
  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const sideNav = button.parentElement;
      const clickedTab = button.dataset.forTab;
      const tabContainer = document.querySelector(".content-box");
      const activeTab = tabContainer.querySelector(
        `.tab-content[data-tab="${clickedTab}"]`
      );

      console.log(sideNav);
      console.log(clickedTab);
      console.log(tabContainer);
      console.log(activeTab);

      sideNav.querySelectorAll(".tab-btn").forEach((tabBtn) => {
        tabBtn.classList.remove("tab-btn--active");
      });

      tabContainer.querySelectorAll(".tab-content").forEach((tabContent) => {
        tabContent.classList.remove("tab-content--active");
      });

      button.classList.add("tab-btn--active");
      activeTab.classList.add("tab-content--active");
    });
  });
}
