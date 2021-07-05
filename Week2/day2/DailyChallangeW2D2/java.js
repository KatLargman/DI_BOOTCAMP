
//daily challange week2 day2

let sentence = "The movie is not that bad, I like it";
console.log('sentance before actions: ' +sentence);
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

if(wordBad > wordNot && wordNot != -1){
    let number = sentence.substring(wordNot, wordBad + 3);
    let result = sentence.replace(number, "good");
    //console.log(result);
    console.log('sentance was changed: ' +result);
}else{
    //console.log('sentance was changed: ' +result);
    console.log('sentance was not changed: ' +sentence);
}
