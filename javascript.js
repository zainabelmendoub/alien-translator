let input= document.getElementById("userInput");
let translateBtn= document.getElementById("translateBtn");
let output= document.getElementById("output");
let lists = document.getElementById("list");

translateBtn.addEventListener("click",function() {
   let userText = input.value;
   output.textContent= userText + "👽";
   let li = document.createElement("li");
   li.textContent= userText;
   lists.appendChild(li);

});

let reverseBtn= document.getElementById("reverseBtn");

function reverseWords(text){
  return text.split("").reverse().join("")
}
reverseBtn.addEventListener("click", function(){
  let userText= input.value;
  let reversed= reverseWords(userText);
  output.textContent= reversed;
});

let replaceBtn = document.getElementById("replaceBtn");

replaceBtn.addEventListener("click", function(){
  function replaceVowels(text){
  return text
  .replace(/a/gi, "@")
  .replace(/e/gi, "3")
  .replace(/i/gi, "!")
  .replace(/o/gi, "0")
}
let userText= input.value;
let replaced= replaceVowels(userText);
output.textContent= replaced;
});

let myfirst= document.getElementById("firsts");
myfirst.style.color= "green";

let clearBtn=document.getElementById("clearBtn");
clearBtn.addEventListener("click", function(){
  input.value = "";
  output.textContent = ""; 
});

