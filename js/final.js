/*--Michael Hedges
Final Project
12/3/2019--*/

"use strict"

//using window.prompt()
//using let keyword
//using ||
let userName = window.prompt("What is your name?");
if (userName == '' || userName == null){
	userName = "Mysterious guest";
}

console.log(userName);

//using getElementById("").textContent
document.getElementById("hello").textContent = "Hello " + userName + "!"



//Question 1

document.getElementById("userQuestion1").textContent = userName + ", do you know what JavaScript was going to be initially called?";

function displayQuestion1() {
	//if...else
	if (document.getElementById("correct1").checked) {
		document.getElementById("container").style.boxShadow = "inset 7px 3px 15px blue";
		setTimeout(() => document.getElementById("container").style.boxShadow = "", 350);
		document.getElementById("question1Answer").style.display = "block";
		document.getElementById("question1Answer").textContent = "LiveScript is correct!";
		document.getElementById("question1Answer").style.color = "#fff";
		document.getElementById("question1Answer").style.backgroundColor = "#3c3176";
	}else{
		document.getElementById("container").style.boxShadow = "inset 7px 3px 15px red";
		setTimeout(() => document.getElementById("container").style.boxShadow = "", 350);
		document.getElementById("question1Answer").style.display = "block";
		document.getElementById("question1Answer").textContent = "Incorrect";
		document.getElementById("question1Answer").style.backgroundColor = "#e0edff";
		document.getElementById("question1Answer").style.color = "#000";	
		
	}
}

//using addEventListener()
document.getElementById("answer1").addEventListener("click", displayQuestion1, false);



//Question 2

document.getElementById("userQuestion2").textContent = userName + ", there are certain words that JavaScript reserves for programming,\
																	called Keywords, or Reserved Words.  How many do you know?";

//let variable to track correct answers
let score = 0

//Array of JavaScript Keywords
let keywords = ["abstract", "arguments", "await", "boolean", "break", "byte", "case", "catch", 
                "char", "class", "const", "continue", "debugger", "default", "delete", "do", 
				"double", "else", "enum", "eval", "export", "extends", "false", "final", 
				"finally", "float", "for", "function", "goto", "if", "implements", "import", 
				"in", "instanceof", "int", "interface", "let", "long", "native", "new", 
				"null", "package", "private", "protected", "public", "return", "short", 
				"static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", 
				"true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield"]



let words = [];

//using getElementById("").value
function displayKeyword() {
	let word = document.getElementById("correct2").value;
	console.log(word);
	let answer = [];
	
	    if (keywords.includes(word)) {
			
			if (words.includes(word)) {
				document.getElementById("question2Answer").style.display = "block";
				document.getElementById("question2Answer").textContent = "You've already guessed " + word + ".  Try another word.";
			}else{
				//using getElementById("").style
				document.getElementById("question2Answer").style.display = "block";
				document.getElementById("question2Answer").textContent = "Correct! " + word + " is a keyword";
			
				words.push(word)
				document.getElementById("keywordsGuessed").style.display = "block";
				
				//Use of for loop
				for (let i = 0; i < words.length; i++) {
					answer += words[i] + ", ";
					console.log("output: " + answer);
					}
				
				//Keep track of how many the visitor gets correct, and which words
				score = score + 1;
				console.log(score);
				document.getElementById("question2CorrectWords").style.display = "block";
				document.getElementById("question2CorrectWords").textContent = "You've correctly found " + score + " of " + keywords.length + " words!";

			}	
	    }else{
			document.getElementById("question2Answer").style.display = "block";
		    document.getElementById("question2Answer").textContent = "Sorry, " + word + " is not a keyword";
		    console.log(word + " is not a keyword");
	}
	document.getElementById("keywordsGuessed").textContent = "Words you've found so far:  " + answer;
	
	if (score == 64) {
		window.alert("You know all the keywords!  Impressive!");
	}
}

document.getElementById("answer2").addEventListener("click", displayKeyword, false);



//Question 3

document.getElementById("userQuestion3").textContent = userName + ", can you select the correct built-in JavaScript function to make 9 + 4 = 13?";

function displayQuestion3(){
	if (document.getElementById("correct3").checked){
		window.alert("Number() is correct!");
		document.getElementById("container").style.boxShadow = "inset 7px 3px 15px blue";
		setTimeout(() => document.getElementById("container").style.boxShadow = "", 350);
		document.getElementById("question3Answer").style.display = "block";
		document.getElementById("question3Answer").textContent = "Number() is correct!";
		document.getElementById("question3Answer").style.color = "#fff";
		document.getElementById("question3Answer").style.backgroundColor = "#3c3176";
	}else{
		document.getElementById("container").style.boxShadow = "inset 7px 3px 15px red";
		setTimeout(() => document.getElementById("container").style.boxShadow = "", 350);
		document.getElementById("question3Answer").style.display = "block";
		document.getElementById("question3Answer").textContent = "Incorrect";
		document.getElementById("question3Answer").style.backgroundColor = "#e0edff";
		document.getElementById("question3Answer").style.color = "#000";
	}
}

document.getElementById("answer3").addEventListener("click", displayQuestion3, false);



//Question 4

document.getElementById("userQuestion4").textContent = userName + ", do you know what these math symbols do in JavaScript?"; 


function doTheMath() {
	let number1 = (document.getElementById("firstNumber").value);
	console.log(number1);
	let number2 = (document.getElementById("nextNumber").value);
	console.log(number2);
	let operator = (document.getElementById("operator").value);
	console.log(operator);
	let result = 0


//switch statement	
	switch(operator) {
		case "add":
			number1 = Number(number1);
			number2 = Number(number2);
		    result = number1 + number2;
		break;
		
		case "subtract":
			result = number1 - number2;
		break;
		
		case "multiply":
			result = number1 * number2;
		break;
		
		case "divide":
			result = number1 / number2;
		break;
		
		case "modulus":
			result = number1 % number2;
		break;
		
		case "exponent":
			result = number1 ** number2;
		break;
	}
	console.log(result);
	document.getElementById("answer4ShowSolution").style.display = "block";
	document.getElementById("answer4ShowSolution").textContent = result;
}
document.getElementById("answer4").addEventListener("click", doTheMath, false);



//Question 5

document.getElementById("userQuestion5").textContent = userName + ", which is an example of a valid variable name?";

function displayQuestion5() {
	//if...else
	if (document.getElementById("correct5").checked) {
		document.getElementById("container").style.boxShadow = "inset 7px 3px 15px blue";
		setTimeout(() => document.getElementById("container").style.boxShadow = "", 350);
		document.getElementById("question5Answer").style.display = "block";
		document.getElementById("question5Answer").textContent = "userName is correct!";
		document.getElementById("question5Answer").style.color = "#fff";
		document.getElementById("question5Answer").style.backgroundColor = "#3c3176";
	}else{
		document.getElementById("container").style.boxShadow = "inset 7px 3px 15px red";
		setTimeout(() => document.getElementById("container").style.boxShadow = "", 350);
		document.getElementById("question5Answer").style.display = "block";
		document.getElementById("question5Answer").textContent = "Incorrect";
		document.getElementById("question5Answer").style.backgroundColor = "#e0edff";
		document.getElementById("question5Answer").style.color = "#000";	
		
	}
}

//using addEventListener()
document.getElementById("answer5").addEventListener("click", displayQuestion5, false);



//Question 6

document.getElementById("userQuestion6").textContent = userName + ", what will be the first value that these logical statements return?";


function findTheAnd() {
	let q6Answer = document.getElementById("question6part1Answer").value;
	
	if (q6Answer == 0) {
		document.getElementById("q6part1Answer").style.display = "block";
		document.getElementById("q6part1Answer").textContent = "0 is correct!  Logical AND && returns the first falsy value";
	}else{
		document.getElementById("q6part1Answer").style.display = "block";
		document.getElementById("q6part1Answer").textContent = "Incorrect";
	}	
}

document.getElementById("button6part1").addEventListener("click", findTheAnd, false);

function findTheOr() {
	let q6Answer2 = document.getElementById("question6part2Answer").value;
	
	if (q6Answer2 == 1) {
		document.getElementById("q6part2Answer").style.display = "block";
		document.getElementById("q6part2Answer").textContent = "1 is correct!  Locgical OR || returns the first truthy value";
	}else{
		document.getElementById("q6part2Answer").style.display = "block";
		document.getElementById("q6part2Answer").textContent = "Incorrect";
	}
}

document.getElementById("button6part2").addEventListener("click", findTheOr, false);



//Question 7

document.getElementById("userQuestion7").textContent = userName + ", do you know which one is not a primitive type?";

function displayQuestion7() {
	//if...else
	if (document.getElementById("correct7").checked) {
		document.getElementById("container").style.boxShadow = "inset 7px 3px 15px blue";
		setTimeout(() => document.getElementById("container").style.boxShadow = "", 350);
		document.getElementById("question7Answer").style.display = "block";
		document.getElementById("question7Answer").textContent = "You're correct, " + userName + "!  All of the above are correct!";
		document.getElementById("question7Answer").style.color = "#fff";
		document.getElementById("question7Answer").style.backgroundColor = "#3c3176";
	}else{
		document.getElementById("container").style.boxShadow = "inset 7px 3px 15px red";
		setTimeout(() => document.getElementById("container").style.boxShadow = "", 350);
		document.getElementById("question7Answer").style.display = "block";
		document.getElementById("question7Answer").textContent = "Incorrect";
		document.getElementById("question7Answer").style.backgroundColor = "#e0edff";
		document.getElementById("question7Answer").style.color = "#000";	
		
	}
}

//using addEventListener()
document.getElementById("answer7").addEventListener("click", displayQuestion7, false);



//Question 8

document.getElementById("userQuestion8").textContent = userName + ", do you know how to change a string?";

function displayQuestion8() {
	//if...else
	if (document.getElementById("correct8").checked) {
		document.getElementById("container").style.boxShadow = "inset 7px 3px 15px blue";
		setTimeout(() => document.getElementById("container").style.boxShadow = "", 350);
		document.getElementById("question8Answer").style.display = "block";
		document.getElementById("question8Answer").textContent = "You're correct, " + userName + "!  String are immutable.";
		document.getElementById("question8Answer").style.color = "#fff";
		document.getElementById("question8Answer").style.backgroundColor = "#3c3176";
	}else{
		document.getElementById("container").style.boxShadow = "inset 7px 3px 15px red";
		setTimeout(() => document.getElementById("container").style.boxShadow = "", 350);
		document.getElementById("question8Answer").style.display = "block";
		document.getElementById("question8Answer").textContent = "Incorrect";
		document.getElementById("question8Answer").style.backgroundColor = "#e0edff";
		document.getElementById("question8Answer").style.color = "#000";	
		
	}
}

//using addEventListener()
document.getElementById("answer8").addEventListener("click", displayQuestion8, false);