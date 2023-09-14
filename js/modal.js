const modal = document.querySelector("#AddtoCart");
const openModal = document.querySelector(".rent");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
