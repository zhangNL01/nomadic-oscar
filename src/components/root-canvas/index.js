const rootCanvas = document.getElementById("root");
const ctx = rootCanvas.getContext("2d");

const getRoot = () => {
    rootCanvas.style.position = "absolute";
    rootCanvas.style.top = "40px";
    rootCanvas.width = 768;
    rootCanvas.height = 1024;
}

const fillCtx = () => {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, rootCanvas.width, rootCanvas.height);
}