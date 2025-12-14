document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript loaded");

  const button = document.getElementById("btn");

  if (button) {
    button.addEventListener("click", () => {
      alert("Button clicked!");
    });
  }
});