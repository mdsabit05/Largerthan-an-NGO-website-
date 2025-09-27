const tabs = document.querySelectorAll(".tab-links li");
const contents = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // remove active from all
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // add active to clicked
    tab.classList.add("active");
    document.getElementById(tab.getAttribute("data-tab")).classList.add("active");
  });
});
