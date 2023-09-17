const buyButton = document.getElementById("buytBtn");
const closeButton = document.getElementById("closeBtn");
const checkoutDialog = document.getElementById("checkoutDialog");

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

// Update button opens a modal dialog
buyButton.addEventListener("click", () => {
  checkoutDialog.showModal();
  openCheck(dialog);
});

// Form cancel button closes the dialog box
closeButton.addEventListener("click", () => {
  checkoutDialog.close("cancel_login");
  openCheck(dialog);
});