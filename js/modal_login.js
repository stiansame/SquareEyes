const modal = document.querySelector("#login-modal");
const openModal = document.querySelector(".login-btn");
const closeModal = document.querySelector(".close-login");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});




