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

// edit btn
const editBtn = document.getElementById("edit-btn");
const addressFormWrapper = document.querySelector(".address-form-wrapper");

// dunno why this fn is affecting the execution of the fn below. this is on the adress page (commented out to allw the other fn work)
// editBtn.addEventListener("click", () => {
//   addressFormWrapper.classList.toggle("hidden");
// });

// toggle personal information edit btn (personal information page)
const editNameBtn = document.getElementById("edit-name");
const editPersonalInfoWrapper = document.getElementById(
  "edit-personal-info-wrapper"
);

editNameBtn.addEventListener("click", () => {
  editPersonalInfoWrapper.classList.toggle("hidden");
});
