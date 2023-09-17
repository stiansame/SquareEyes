const welcomeModal = document.getElementById("welcomeDialog");
const openWelcomeModal = document.getElementById("regBtn");

const closeWelcomeModal = document.getElementById("mypageBtn");

openWelcomeModal.addEventListener("click", () => {
  welcomeModal.showModal();
});

closeWelcomeModal.addEventListener("click", () => {
  welcomeModal.close();
});