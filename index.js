
function Start(){
    let first = parseFloat(document.getElementById("first").value);
let second = parseFloat(document.getElementById("second").value);
let third = parseFloat(document.getElementById("third").value);
let fourth = parseFloat(document.getElementById("fourth").value);
let fifth = parseFloat(document.getElementById("fifth").value);

let result = ((first * 17.5) + (second * 24) + (third * 21) + (fourth * 21) + (fifth * 24))/107.5;
console.log(result);
    document.getElementById("result").innerText = "cgpa = " + result.toFixed(3);
    let percentage = ((result - 0.5) * 10);
    document.getElementById("percentage").innerText = "percentage = " + percentage.toFixed(2);

}

