let arr1 = ["a","b","c","d","a","b","c","d"];
let arr2 = ["a","b","c","d","a","b","c","d"];
console.log(arr1)
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

let shufarray = shuffle(arr1);
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
   // setTimeout(starSuffleArr, 5000)
}
//func - to count how may moves the user did
function moves(moves){
    moves++
}
let seconds = 0
let minutes = 0
//stopwatch
function stopWatch(){
    if(minutes == 99 && seconds > 58){
        return "to much time past, you lost"
    }
    else if(seconds == 60){
        minutes++
        seconds = 0
    }
    seconds++  
}
setInterval(stopWatch,1000)
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