var Marks = +prompt("Enter Your Marks?")
var totalNumbar = 1150
var impotant = (Marks / totalNumbar) * 100
console.log(impotant);
if (impotant >=30 && impotant<=45) {
    alert("Your Grade is D")
}else if (impotant >=46 && impotant<=60){
    alert("Your Grade is c")
}
else if (impotant >=61 && impotant<=70){
    alert("Your Grade is B")
}
else if (impotant >=71 && impotant<=80){
    alert("Your Grade is a")
}
else if (impotant >=81 && impotant<=100){
    alert("Your Grade is A+")
}
else{
    alert("Your are Fail")
}