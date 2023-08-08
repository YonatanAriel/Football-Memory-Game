let difficulty;
let cardsAmount;
let container = document.getElementById("container");
let easy = document.getElementById("easy"); 
let nightmare = document.getElementById("nightmare");
let instructionElement = document.getElementById("h2");
let levels = [easy,nightmare];
levels.forEach(level =>  level.onclick = levelClick);

function levelClick(event){
    choice = event.target;
    container.style.opacity = "0";
    difficulty = choice.innerText;
    localStorage.setItem("difficulty",difficulty);

    setTimeout(() => {
        container.style.opacity = "1";
        instructionElement.innerText = "Cards amount"; 
        easy.innerText = "24";
        nightmare.textContent = "48";
        levels.forEach(p => { p.style.fontSize = "100px" 
        p.onclick = amount} );    
    }, 500);
} 

function amount(event){
    cardsAmount = event.target.innerText;
    localStorage.setItem("cardAmount",cardsAmount);
    window.location.href = "index.html";
} 






