const images = document.querySelectorAll(".lightbox");
const body = document.body;

images.forEach(image => {
    image.addEventListener("click", function () {
        openLightbox(image.src, image.alt);
    });
});

function openLightbox(src, altText) {
    const bg = document.createElement("div");   
    bg.id = "bg";

    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";

    const img = document.createElement("img");
    img.width = 600;
    img.src = src;
    img.alt = altText;

    const description = document.createElement('p');
    description.textContent = altText;

    const closeBtn = document.createElement("button");
    closeBtn.id = "close-btn";
    closeBtn.innerHTML = "X";

    lightbox.appendChild(img);
    lightbox.appendChild(description);
    lightbox.appendChild(closeBtn);
    bg.appendChild(lightbox);
    body.appendChild(bg);

    body.style.overflow = "hidden";

    closeBtn.addEventListener("click", closeLightbox);

    document.addEventListener("keyup", function (e) {
        if (e.key === "Escape") {
            closeLightbox();
        }
    });

    centerLightbox();

    function closeLightbox() {
        bg.remove();
        body.style.overflow = "visible";
    }

    function centerLightbox() {
        const lightboxWidth = lightbox.offsetWidth;
        const lightboxHeight = lightbox.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const top = (windowHeight - lightboxHeight) / 2;
        const left = (windowWidth - lightboxWidth) / 2;

        lightbox.style.position = 'fixed';
        lightbox.style.top = `${top}px`;
        lightbox.style.left = `${left}px`;
    }
};