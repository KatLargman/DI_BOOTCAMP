function playTheGame() {
    let x = confirm("Do you wanna play")
    if (x == false) {
        alert("No problem, Goodbye")
    } else {
        let userNumber = Math.floor(prompt("enter a number between 0 and 10"))
        if (isNaN(userNumber)) {
            alert("Sorry Not a number, Goodbye")
        } else if(userNumber > 10){
            alert("Sorry it’s not a good number, Goodbye")
        }else {
            let computerNumber = Math.floor(Math.random()* 10);  
            console.log(computerNumber)
            test(userNumber, computerNumber)
        }
    }
} 

let guessedTimes = 0;

function test(userNumber, computerNumber, guesedTimes) {
    
    if (userNumber === computerNumber) {
        alert("WINNER")
        guessedTimes += 1
        console.log(`i guess ${guessedTimes} times`)
        if (guessedTimes == 3) {
            return alert("out of chances you guessed "+guessedTimes+ " times")
        }
    }else if (userNumber > computerNumber){
        alert("Your number is bigger")
        secondChance()
    }else if (userNumber < computerNumber){
        alert("Your number is smaller")
        secondChance()
    }
}
function secondChance() {
    
        let userNumber = Math.floor(prompt("Try again :( Enter a number between 0 and 10"))
        if (userNumber == false) {
            alert("No problem, Goodbye")
        } else if (isNaN(userNumber)) {
            alert("Sorry Not a number, Goodbye")
        } else if(userNumber > 10){
            alert("Sorry it’s not a good number, Goodbye")
        }else {
            let computerNumber = Math.floor(Math.random()* 10);  
            console.log(computerNumber)
            test(userNumber, computerNumber)
        }
    
}
