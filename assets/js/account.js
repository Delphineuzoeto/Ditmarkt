const modalArrow = document.querySelector(".arrow-icon");
const modalContent = document.querySelector(".modal-content");

modalArrow.addEventListener("click", () => {
  modalContent.classList.toggle("hidden");
});
