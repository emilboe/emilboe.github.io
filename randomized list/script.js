var staticArray = ["Dogs", "Cats", "Birds", "Fish", "Dinosaurs", "Rabbits"];
var array = ["Dogs", "Cats", "Birds", "Fish", "Dinosaurs", "Rabbits"];
const list = document.getElementById("list");

function printList(){
  var randomNum = Math.floor(Math.random() * array.length)
  if(!array.length) return
  list.innerHTML += "<li>" + array[randomNum] + "</li>";
  array.splice(randomNum, 1);
}

function reset(){
  array = [...staticArray];
  list.innerHTML = "";
}

var thing;
let func = (str = 'no arg') => {
  console.log(str);
}

let a = 5
console.log(a++);
console.log(++a);
