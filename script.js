let boxes = document.querySelectorAll(".boxes")
let reset = document.querySelector(".btn")
let newgame = document.querySelector(".newgame")
let winnerm = document.querySelector(".winner")
let wins = document.querySelector("#win")


let O = true;

const winpatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 4, 6], [2, 5, 8],
    [3, 4, 5], [6, 7, 8]
];


boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (O === true) {
            box.innerHTML = "X";
            O = false;
        }
        else {
            box.innerHTML = "O";
            O = true;
        }
        box.disabled = true;
        winner();
    });
})

const showwinner = (win1) => {
    wins.innerText = `Game Over! 
    The Winner is ${win1}! `
    winnerm.classList.remove("hide")
}
const winner = () => {
    for (const win of winpatterns) {
        let pos1 = boxes[win[0]].innerText;
        let pos2 = boxes[win[1]].innerText;
        let pos3 = boxes[win[2]].innerText;
        if (pos1 != pos2 != pos3) {
            if (pos1 == pos2 && pos2 == pos3) {
                // console.log("win", pos1)
                showwinner(pos1)
                disablebtn()
            }
        }
    }
}



const disablebtn = () => {
    boxes.forEach(box => {
        box.disabled = true;
    })
}

const enablebtn = () => {
    boxes.forEach(box => {
        box.innerHTML = "";
        box.disabled = false;
        winnerm.classList.add("hide")
    })
}

reset.addEventListener("click", enablebtn)
newgame.addEventListener("click", enablebtn)