// console.log ("Dari main js") ;

//1
import confetti from "canvas-confetti";

//3
const myCanvas = document.createElement("canvas");

//2
const confettiBtn = document.getElementById("btnConfetti");

//6 ubah posisi confetti di tengah
myCanvas.style.width="100vw";
myCanvas.style.height="100vh";
//agar posisi confetti ke atas
myCanvas.style.position="fixed"
myCanvas.style.inset= 0;
myCanvas.style.zIndex= -10;

//5
document.body.append(myCanvas);

//4
confettiBtn.addEventListener("click", () => {
    const myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true,
    });
    myConfetti({
        particleCount:100,
        spread: 160,

    });
})