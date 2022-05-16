
// var let const

//window.alert("Welcome");

//let x = 3;
//let y = 4.0;
//let z = undefined;

//console.log("Hey There number" +x);
//console.log(`Hey There number ${x}`);

document.getElementById("myDiv").innerHTML = "Hey There!";

const myNumber = window.prompt("Tell me your name");

//console.log("Hello" + myString);

//if (myString == "Jay"){
  //  window.alert("Welcome Jay")
//}
//else{
  //  console.error(`You are not Jay`);
//}

//if (1=="1"){
  //  console.log(`equals ...`);
//}else{
  //  console.error(`Not equals ...`);
//}

//const passmark = 40;
//let marks = window.prompt("Enter marks");
//let marksInt = pareseInt(marks);

//if(marksInt > passmark){
  //  window,prompt("You passed");
//}else if (marksInt === passmark){
  //  window,prompt("You got the minimum");
//}else{
  //  window,prompt("You failed");
//}


let youAreNew = false;
const passmark = 40;
let marks = window.prompt("Enter marks");
let marksInt = pareseInt(marks);
let areYouNew = window.prompt("Enter yes or y");

if (areYouNew == "Y" || areYouNew == "yes" || areYouNew == "y");
    youAreNew = true;

if(youAreNew == true ||marksInt >= 40){
    console.log("You passed");
}else{
    console.log("You failed");
}
