let myVariable ="SS"
let difficulty;
let cardsAmount;
let easy = document.getElementById("easy"); 
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");
let levels = [easy,medium,hard]
levels.forEach(level =>  level.onclick = levelClick);
let userChoiceH1 = document.getElementById("h1");
function levelClick(event){
    choice = event.target
    userChoiceH1.innerText = "cards amount:"
    userChoiceH1.style.fontSize = "100px"
    difficulty = choice.innerText
    localStorage.setItem("difficulty",difficulty)

    console.log(cardsAmount, difficulty)
    easy.innerText = "12"
    medium.textContent = "18"
    hard.textContent = "48"
    levels.forEach(p => { p.style.fontSize = "115px" 
     p.onclick = amount} );
} 
function amount(event){
    // cardsAmount =
    console.log(event.target.innerText) 
    cardsAmount = event.target.innerText
    localStorage.setItem("cardAmount",cardsAmount)
    window.location.href = "index.html"
console.log(difficulty)

} 
console.log(cardsAmount)






