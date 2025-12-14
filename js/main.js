document.addEventListener("DOMContentLoaded", () => {
  /* ---------------- Sidebar ---------------- */
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
  overlay.addEventListener("click", closeSidebar);
  closeBtn.addEventListener("click", closeSidebar);

  /* ---------------- Slideshow ---------------- */
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.getElementById("nextSlide");
  const prevBtn = document.getElementById("prevSlide");

  let current = 0;

  function showSlide(index, direction) {
    slides[current].classList.remove("active");
    slides[current].classList.add(direction === "next" ? "exit-left" : "");

    slides[index].classList.remove("exit-left");
    slides[index].classList.add("active");

    current = index;
  }

  nextBtn.addEventListener("click", () => {
    const next = (current + 1) % slides.length;
    showSlide(next, "next");
  });

  prevBtn.addEventListener("click", () => {
    const prev = (current - 1 + slides.length) % slides.length;
    showSlide(prev, "prev");
  });
});
