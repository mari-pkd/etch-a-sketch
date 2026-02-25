const canvas = document.querySelector(".canvas");

function createCanvas(size) {
    let elementNumber = size ** 2;
    let pixelSide = (560 / size) - 2 + "px";
    for (let i = 0; i < elementNumber; i++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.height = pixelSide;
        pixel.style.width = pixelSide;
        canvas.appendChild(pixel);
    }
    console.log(pixelSide);
}

createCanvas(16);