document.addEventListener("DOMContentLoaded", () => {
  const modalArrows = document.querySelectorAll(".arrow-icon");
  const modals = document.querySelectorAll(".page-modal");

  modalArrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
      const modalContent = modals[index].querySelector(".modal-content");

      // Close other modals
      modals.forEach((otherModal, otherIndex) => {
        if (otherIndex !== index) {
          const otherModalContent = otherModal.querySelector(".modal-content");
          otherModalContent.classList.add("hidden");
        }
      });

      // toggle the hidden class on the clicked modal
      modalContent.classList.toggle("hidden");
    });
  });
});
