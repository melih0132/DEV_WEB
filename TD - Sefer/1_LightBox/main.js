document.addEventListener("DOMContentLoaded", function () {
  const lightboxImages = document.querySelectorAll(".lightbox");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxText = document.getElementById("lightbox-text");
  const bg = document.getElementById("bg");
  const closeBtn = document.getElementById("closeBtn");

  function openLightbox(imageSrc, altText) {
    lightboxImg.src = imageSrc;
    lightboxText.textContent = altText;
    bg.style.display = "block";
    lightbox.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    bg.style.display = "none";
    lightbox.style.display = "none";
    document.body.style.overflow = "visible";
  }

  lightboxImages.forEach((image) => {
    image.addEventListener("click", function () {
      const imgSrc = this.src;
      const imgAlt = this.alt || "Image";
      openLightbox(imgSrc, imgAlt);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);

  document.addEventListener("keyup", function (e) {
    if (e.key === "Escape") {
      closeLightbox();
    }
  });

  window.addEventListener("resize", function () {
    if (lightbox.style.display === "block") {
      lightbox.style.top = "50%";
      lightbox.style.left = "50%";
      lightbox.style.transform = "translate(-50%, -50%)";
    }
  });
});
