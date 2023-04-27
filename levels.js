let difficulty;
let cardsAmount;
let easy = document.getElementById("easy"); 
let nightmare = document.getElementById("nightmare");
// let hard = document.getElementById("hard");
let levels = [easy,nightmare];
levels.forEach(level =>  level.onclick = levelClick);
let userChoiceH1 = document.getElementById("h1");
function levelClick(event){
    choice = event.target;
    userChoiceH1.innerText = "cards amount:";
    userChoiceH1.style.fontSize = "100px";
    difficulty = choice.innerText;
    localStorage.setItem("difficulty",difficulty);
    console.log(cardsAmount, difficulty)
    easy.innerText = "24";
    nightmare.textContent = "48";
    levels.forEach(p => { p.style.fontSize = "115px" 
    p.onclick = amount} );
} 
function amount(event){
    cardsAmount = event.target.innerText;
    localStorage.setItem("cardAmount",cardsAmount);
    window.location.href = "index.html";
} 






