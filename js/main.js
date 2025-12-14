document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openSidebar");
  const closeBtn = document.getElementById("closeSidebar");
  const overlay = document.getElementById("overlay");
  const sidebarContent = document.getElementById("sidebarContent");

  function openSidebar() {
    document.body.classList.add("sidebar-open");

    fetch("./pages/contact.html")
      .then(res => res.text())
      .then(html => sidebarContent.innerHTML = html);
  }

  function closeSidebar() {
    document.body.classList.remove("sidebar-open");
  }

  openBtn.addEventListener("click", openSidebar);
  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);
});
