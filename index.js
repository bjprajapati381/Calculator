const keys = document.querySelector(".keys");
const input = document.querySelector(".input input");
const output = document.querySelector(".input p");
let a="";
const buttons = [
  "(",
  ")",
  "%",
  "CLEAR",
  "7",
  "8",
  "9",
  "&#247",
  "4",
  "5",
  "6",
  "&#215",
  "1",
  "2",
  "3",
  "-",
  "0",
  "=",
  ".",
  "+",
];
const generateButtons = () => {
  keys.innerHTML = "";
  for (let i = 0; i < 20; i++) {
    const button = document.createElement("button");
    button.innerHTML = buttons[i];
    keys.appendChild(button);
    button.addEventListener("click", () => press(button));
  }
};
generateButtons();

const press = (button) => {
  if (button.innerHTML == "CLEAR") {
    input.value = "";
    output.innerHTML = ""
    a="";
  } else if (button.innerHTML == "=" ) {
      if(input.value==""){
        output.innerHTML=""
      }
      else{
        a=input.value.replace("÷","/")
      a=a.replace("×","*")

      output.innerHTML = input.value + " = " + eval(a);
      input.value = "";
      }
      
    
  } 
  else {
    input.value += button.innerHTML;
  }
};

input.addEventListener("keydown", (event) => {
  if (!/[0-9\.\+\-\/\)\(\*]/.test(event.key)) {
    if (event.key == "Enter") {
      if (eval(input.value) == undefined) {
        output.innerHTML = "";
      } else {
        output.innerHTML = input.value + " = " + eval(input.value);
        input.value = "";
      }
    }
    if (event.key == "Backspace") {
      input.value = input.value.substring(0, input.value.length - 1);
    }
    event.preventDefault();
  }
});
