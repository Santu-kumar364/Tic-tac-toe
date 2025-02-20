let boxes = document.querySelectorAll(".box")
let resetBox = document.querySelector("#reset_btn")
let msgContainer = document.querySelector(".message-container");
let msg = document.querySelector(".msg");

let turnO = true; //playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();

    })
})

const showWinner = (winner)=>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for (let pattern of winPatterns) {

        let firstBox = boxes[pattern[0]].innerText
        let secondBox = boxes[pattern[1]].innerText
        let thirdBox = boxes[pattern[2]].innerText

        if(firstBox != "" && secondBox != "" && thirdBox != "") {
            if(firstBox === secondBox && secondBox === thirdBox) {
                console.log("Winner", firstBox);
            }
            showWinner(firstBox);
        }

         



    }
}
