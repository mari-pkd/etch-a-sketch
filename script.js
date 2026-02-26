const canvas = document.querySelector(".canvas");
const ui = document.querySelector(".ui");

let canvasSize = 16;

//for editing canvas size in CSS:
let canvasSide = 
window.getComputedStyle(canvas, null).getPropertyValue("height");
canvasSide = Number(canvasSide.slice(0, 3));

function clearCanvas() {
    let pixel = canvas.lastElementChild;
    while (pixel) {
        canvas.removeChild(pixel);
        pixel = canvas.lastElementChild;
    }
    createCanvas(canvasSize);
}

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
            let opacity = 
            window.getComputedStyle(pixel, null).getPropertyValue("opacity");

            switch (opacity) {
                case "0%":
                    opacity = Number(opacity.slice(0, 0));
                    break;
                case "100%":
                    opacity = Number(opacity.slice(0, 3) * 100);
                    break;
                default:
                    opacity = Number(opacity.slice(0, 3) * 100);
            }

            pixel.style.background = "black";
            pixel.style.opacity = (opacity + 10) + "%";
            console.log(opacity);

        });
    })
}

ui.addEventListener("click", (event) => {
    let target = event.target;
    
    switch (target.id) {
        case "resize":
            canvasSize = prompt("Enter new canvas size (up to 100): ");
            if (canvasSize > 100) alert("Can't create a canvas this big!");
            else {
                clearCanvas();
            }
            break;
        case "clear":
            clearCanvas();
    }
})

createCanvas(canvasSize);