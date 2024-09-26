let score = 0;

function couleurHasard() {
    return `#${Math.floor(Math.random() * 0xFFFFFF)}`;
}


function creeBulle() {
    const bulle = document.createElement('div');
    bulle.classList.add('bubble');

    //#region Generation bulle
    const x = Math.random() * window.innerWidth; 
    const y = Math.random() * window.innerHeight;

    bulle.style.left = `${x}px`;
    bulle.style.top = `${y}px`;
    bulle.style.backgroundColor = couleurHasard();
    //#endregion

    //#region animation bulle
    bulle.addEventListener('mouseenter', () => {
        bulle.style.transform = 'scale(1.5)';
    });

    bulle.addEventListener('mouseleave', () => {
        bulle.style.transform = 'scale(1)';
    });
    //#endregion

    bulle.addEventListener("click", function () {
        // i++;
        // var score = i;
        bulle.remove();
        score++;
        majScore();
    });

    document.body.appendChild(bulle);
}

function majScore() {
    const score1 = document.getElementById('valeurScore');
    score1.textContent = score;
}

setInterval(creeBulle, 750);
