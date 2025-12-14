document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openSidebar");
  const closeBtn = document.getElementById("closeSidebar");
  const overlay = document.getElementById("overlay");
  const sidebarContent = document.getElementById("sidebarContent");

  function openSidebar() {
    document.body.classList.add("sidebar-open");

    fetch("./pages/contact.html")
      .then(response => response.text())
      .then(html => {
        sidebarContent.innerHTML = html;
      });
  }

  function closeSidebar() {
    document.body.classList.remove("sidebar-open");
  }

  openBtn.addEventListener("click", openSidebar);
  overlay.addEventListener("click", closeSidebar);
  closeBtn.addEventListener("click", closeSidebar);
});
