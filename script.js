const canvas = document.querySelector(".canvas");

//for editing canvas size in CSS:
let canvasSide = 
window.getComputedStyle(canvas, null).getPropertyValue("height");
canvasSide = Number(canvasSide.slice(0, 3));

let opacity = 10;

function createCanvas(size) {
    let elementNumber = size ** 2;
    let pixelSide = (canvasSide / size) - 2 + "px";
    for (let i = 0; i < elementNumber; i++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.height = pixelSide;
        pixel.style.width = pixelSide;
        canvas.appendChild(pixel);
    }

    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseenter", () => {
            pixel.style.background = "black";
            pixel.style.opacity = opacity + "%";
            opacity += 10;
        });
    })
}

createCanvas(16);