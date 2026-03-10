let display = document.getElementById("display");

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    if (value === "C") {
      display.value = "";
    } else if (value === "DEL") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});
document.addEventListener("keydown", function (e) {
  if ("0123456789+-*/.".includes(e.key)) {
    display.value += e.key;
  }

  if (e.key === "Enter") {
    display.value = eval(display.value);
  }

  if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
});
