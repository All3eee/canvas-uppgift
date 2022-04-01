// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");


// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

function paintRect(midX, midY, s) {
  c.beginPath()
  c.rect(midX, midY, s, s/1.2);
  c.stroke()
}

function paintReversedRect(midX, midY, s, color) {
  c.beginPath()
  c.fillStyle = color
  c.fillRect(midX, midY, s/1.4, s);
  c.stroke()
}

function paintTria(x, y, rectangelwidth) {
  c.beginPath();
  c.moveTo(x, y);
  c.lineTo((x+rectangelwidth/2), 150);
  c.lineTo((x+rectangelwidth), y);
  c.stroke();
}

function paintRing() {
  // Funktionen ritar en ring som består av 12 jämnt fördelade prickar
  const circleRadius = 200;
  const dotRadius = 15;
  c.fillStyle = "red";
  let x; // Kommer att lagra respektive pricks läge i x-led
  let y; // Kommer att lagra respektive pricks läge i y-led
  for (let i = 1; i <= 12; i++) {
    // Beräknar läget på resp. prick
    x = midX + circleRadius * Math.cos((((Math.PI * 360) / 12) * i) / 180);
    y = midY + circleRadius * Math.sin((((Math.PI * 360) / 12) * i) / 180);

    // Ritar prickarna
    c.beginPath();
    c.arc(x, y, dotRadius, 0, 2 * Math.PI);
    c.closePath();
    c.fill();
  }
}

function paintSimpleSquarePattern() {
  const s = 40; // Kvadratens sida
  const space = 3 * s;
  const numRows = 6;
  const numCols = 10;
  let color = ["blue", "red"];
  for (let i = 0; i <= numCols; i++) {
    for (let j = 0; j <= numRows; j++) {
      c.fillStyle = color[(i + 1) % 2];
      if (j % 2 === 1) {
        c.fillStyle = color[i % 2];
      }
      c.fillRect(i * space, j * space, s, s);
    }
  }
}

function drawPicture() {
  paintRect((canvas.width/45), (canvas.height/1.6), 250)
  paintRect(canvas.width-(canvas.width/45+250), (canvas.height/1.6), 250)
  paintTria((canvas.width/45), (canvas.height/1.6), 250)
  paintTria(canvas.width-(canvas.width/45+250), (canvas.height/1.6), 250)
  paintReversedRect((canvas.width/2-(100/2.8)), (canvas.height/1.25), 100, "sienna")
}
drawPicture();
