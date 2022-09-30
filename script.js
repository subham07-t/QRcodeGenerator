const container = document.querySelector(".container");
const generateBtn = document.querySelector(".form button");
const qrInput = container.querySelector("input");
const qrImage = container.querySelector(".qr-code img");
qrInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && e.target.value) {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generateBtn.innerText = "Generating QR Code ...";
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue} `;
    qrImage.addEventListener("load", () => {
      container.classList.add("active");
      generateBtn.innerText = "Generate QR Code";
    });
  }
});
generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return;
  generateBtn.innerText = "Generating QR Code ...";
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue} `;
  qrImage.addEventListener("load", () => {
    container.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  });
});
qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    container.classList.remove("active");
  }
});
