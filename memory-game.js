let arr = ["a","b","c","d","a","b","c","d"];
let arr1 = ["a","b","c","d","a","b","c","d"]

//function that suffle the second array
function shuffle(arr){
    for(i = 0;i < arr.length * 2; i++){
        let ran = Math.floor(Math.random()) * arr.length
        let temp = arr[i] 
        arr[i] = arr[ran]
        arr[ran] = temp
    }
    return arr
}
let r = shuffle(arr1)
console.log(r,arr1)
//funch makes new array made from stars in the same length of the suffle array
function arrToStar(arr1){
     return arr1.map(v => v = "*")
}
let k = arrToStar(shuffle(arr1))
console.log(k)
//func that gets 2 index, stars array, suffule array
//and show the cards on the stars array
function showCards(card1,card2,starsArr,shufArray){
    starsArr[card1] = shufArray[card1]
    starsArr[card2] = shufArray[card2]
}
let c = showCards(1, 4, arrToStar(arr1), arr1)
console.log(c)