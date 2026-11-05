const closeModalBtn = document.querySelector("#closeBtn");
const hamburgerMenuBtn = document.querySelector("#hamburgerMenuBtn");

const handleModal = () => {
  const modalOverlay = document.querySelector("#modalOverlay");

  modalOverlay.classList.add("overlay-open");
};

hamburgerMenuBtn.addEventListener("click", handleModal);

closeModalBtn.addEventListener("click", () => {
  const modalOverlay = document.querySelector("#modalOverlay");

  modalOverlay.classList.remove("overlay-open");
});
