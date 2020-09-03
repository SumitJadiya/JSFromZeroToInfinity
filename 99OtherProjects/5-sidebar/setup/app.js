let sidebarToggle = document.querySelector(".sidebar-toggle")
let sidebar = document.querySelector(".sidebar")
const closeBtn = document.querySelector(".close-btn");

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar")
    console.log(sidebar.classList)
})
closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});
