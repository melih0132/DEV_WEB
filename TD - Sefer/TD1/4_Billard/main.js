const canvas = document.getElementById("table");
const context = canvas.getContext("2d");

//#region rond noir
// context.beginPath();
// context.arc(100, 100, 90, 0, 2 * Math.PI);
// context.fillStyle = "black";
// context.fill();
// context.closePath();
//#endregion

let boule = {
  x: 400,
  y: 300,
  vx: 2,
  vy: 2,
  r: 50,
};

const frottement = 0.99;

function dessinerBoule() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(boule.x, boule.y, boule.r, 0, Math.PI * 2, false);
  context.fillStyle = "black";
  context.fill();
  context.closePath();
}
dessinerBoule();

function majPosition() {
  boule.x += boule.vx;
  boule.y += boule.vy;

  if (boule.x + boule.r > canvas.width || boule.x - boule.r < 0) {
    boule.vx = -boule.vx * frottement;
  }

  if (boule.y + boule.r > canvas.height || boule.y - boule.r < 0) {
    boule.vy = -boule.vy * frottement;
  }

  boule.vx *= frottement;
  boule.vy *= frottement;
}

setInterval(function () {
  dessinerBoule();
  majPosition();
}, 10);
