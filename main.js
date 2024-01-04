let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO= true;
let count = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO)
        {
            box.innerText = "O";
            turnO=false;
            
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        count++;
        checkWinner(); 
        if(count == 9)
        {
            count = 0;
            console.log("Match Tied");
            showTie();
            // resetGame();
        
        }
    });
})

const disabledBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText=""
    }
}
const showTie = () =>{
    
    msg.innerText = `Game is Tied`;
    disabledBoxes();
    msgContainer.classList.remove("hide");

}
const showWinner= (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    disabledBoxes();
    msgContainer.classList.remove("hide");
    // msgContainer.checkVisibility(true);
    
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

const checkWinner = () =>{
    
    for(let pattern of winPatterns)
    {
        //    console.log(pattern[0],pattern[1],pattern[2]);
        //    console.log(boxes[pattern[0]].innerText,
    //     boxes[pattern[1]],
    //     boxes[pattern[2]]);
    
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2!="" && pos3 != "")
        {
      
            if(pos1 == pos2 && pos2 == pos3)
            {
                // alert(pos1);
                showWinner(pos1);
            }
             
        }
        
     }
}