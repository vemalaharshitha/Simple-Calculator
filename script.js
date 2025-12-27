let display = document.getElementById("display");
let history = document.getElementById("history");

function appendValue(value){
  display.value += value;
}

function clearDisplay(){
  display.value = "";
}

function deleteValue(){
  display.value = display.value.slice(0,-1);
}

function calculate(){
  try{
    let result = eval(display.value);
    addHistory(display.value + " = " + result);
    display.value = result;
  }
  catch{
    display.value = "Error";
  }
}

// History Function
function addHistory(entry){
  let li = document.createElement("li");
  li.innerText = entry;
  history.appendChild(li);
}

// Keyboard Support
document.addEventListener("keydown", e=>{
  if(e.key === "Enter") calculate();
  else if(e.key === "Backspace") deleteValue();
  else display.value += e.key;
});
