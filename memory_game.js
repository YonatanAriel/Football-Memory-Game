let arr1 = [{index:"0$",imgSrc:"ron.jpg"},{index:"1$",imgSrc:"ron.jpg"},{index:"2$",imgSrc:"ron.jpg"},{index:"3$",imgSrc:"ron.jpg"},{index:"4$",imgSrc:"ron.jpg"},{index:"5$",imgSrc:"ron.jpg"},{index:"6$",imgSrc:"ron.jpg"},{index:"7$",imgSrc:"ron.jpg"},{index:"8$",imgSrc:"ron.jpg"}];
let userChoose = 14 //with how many cards the user want to play (minimum 4 - max 18?)//need to let him choose levels or just even numbers
arr4 = [...arr1]
let r = arr4.map(v => v = v.index.charAt(0) + "*")
console.log(arr1)
console.log(r)
let arr2 = arr1.slice(0,userChoose / 2).concat(arr1.slice(0,userChoose / 2))
0,1,2,0,1,2
// console.log(arr1)
let startGame = false //if the user press start - startGame = true
//function that suffle the second array
function shuffle(arr){
    for(j = 0; j < 3; j++){
       for(i = 0;i < arr.length; i++){
            let ran = Math.floor(Math.random()) * arr.length//rndom
            let temp = arr[i] 
            arr[i] = arr[ran]
            arr[ran] = temp
        }
    }
    return arr
}

// )    (זה בגלל שבלולאת פור עשיתי length * 2) נקראת הדף בכרום כותב "אוי לא" ולא טוען את הדף כל פעם שפונקציית shuffle (status breakpoint)
//func -  makes new array made from stars in the same length of the suffle array
function arrToStar(arr){
     return arr.map(v => v = "*")
}
//func that gets 2 index, stars array, suffule array
//and show the cards on the stars array
function showCards(starsArr,shufArray,index1,index2){
    let arr =  [].concat(starsArr)
    if(index2){
        arr[index1] = shufArray[index1]
        arr[index2] = shufArray[index2]
    }
    else{
        arr[index1] = shufArray[index1]
    }
    return arr
}

let shufarray = shuffle(arr2);
console.log(shufarray)
let starSuffleArr = arrToStar(shufarray)
let userOutput1 = 2; //first index (of card) from the user
showCards(starSuffleArr, shufarray, userOutput1); //show the user the first card
let userOutput2 = 6; // second index 
if(shufarray[userOutput1] == shufarray[userOutput2]){//if the cards matches
    showCards(starSuffleArr, shufarray, userOutput1, userOutput2)
    starSuffleArr[userOutput1] = shufarray[userOutput1] //make the cards always appear on the stars array
    starSuffleArr[userOutput2] = shufarray[userOutput2]
}
else{
    showCards(starSuffleArr, shufarray, userOutput1, userOutput2)//show the cars for 5 seconds
   // setTimeout(starSuffleArr, 5000)hide() //show() delay() fadeout() //need to study "jQuery"
}
//func - to count how may moves the user did
function moves(moves){
    moves++
}
let seconds = 0;
let minutes = 0;
//stopwatch
// function stopWatch(){
//     if(minutes == 99 && seconds > 58){
//         return "too much time past, you lost"
//     }
//     else if(seconds == 60){
//         minutes++
//         seconds = 0
//     }
//     seconds++  
//     console.log(`${minutes}:${seconds}`) 
// }
// setInterval(stopWatch,1000)
//setInterval(bb,1000)
//setTimeOut()?
//scoring method
function score(){
    if(timer < 200 && moves < 10){
       return "amazing"
    }
    else if(timer < 400 && moves < 25){
       return "great"
    }
    else{
       return "you won! you can do it faster next time"
    }
}
let createCard = () => {
    let arr = [];
for(v of arr2){
    card = document.createElement("div");
    card.className = "cardBack";
    card.innerText = "?";
    // card.addEventListener("click",flip(Event))
    card.id = v.index;
    id = card.id;
    img = document.createElement("img");
    img.src = v.imgSrc;
    card.onclick = flip;
    // img.width = "0px";
    // img.height = "0px";
    console.log(arr)
    if(checkIfImgIdAlreadtExist(arr)){
        img.id = id + "*";
    }
    else{
        img.id = id + "$";
    }
    card.append(img);
    console.log(img.id)
    // card.('click',funOnClick)
    document.getElementById("board").append(card)
}
}
createCard()
function checkIfImgIdAlreadtExist(arr) {//func to make diff id for img with the same index
    for(v of arr){
        if(v == id){
          return true
        }
    }
    arr.push(id)
    return false
}
// document.getElementsByClassName("cardBack").forEach(element => {
//     element.onClick
//     element.addEvemtLisenr
// }); = flip
function flip(event){
    card = event.target;
    card.innerText = "";
    card.className = "cardFront";
    console.log(card)
    img1 = document.getElementById(card.id + "$")
    // img1.style.width = "80px";
    // img1.style.height = "80px";
    img1.alt = "player"
    img1.className = "photos"
    console.log(img1);
}
// const init =()=>{
//     const board = document.getElementById("board")
// }
