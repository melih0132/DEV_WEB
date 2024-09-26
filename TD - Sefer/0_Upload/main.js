const fileInput = document.getElementById("fileInput");
const previewImg = document.getElementById("previewImg");
const previewBox = document.getElementById("previewBox");

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      previewImg.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

previewBox.addEventListener("dragover", (e) => {
  e.preventDefault();
  previewImg.classList.add("drag-over");
});

previewBox.addEventListener("dragleave", () => {
  previewImg.classList.remove("drag-over");
});

previewBox.addEventListener("drop", (e) => {
  e.preventDefault();
  previewImg.classList.remove("drag-over");

  const file = e.dataTransfer.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      previewImg.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});
