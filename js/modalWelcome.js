const welcomeModal = document.getElementById("welcomeDialog");
const openWelcomeModal = document.getElementById("registerBtn");

const closeWelcomeModal = document.getElementById("mypageBtn");

openWelcomeModal.addEventListener("click", () => {
  welcomeModal.showModal();
});

closeWelcomeModal.addEventListener("click", () => {
  welcomeModal.close();
});