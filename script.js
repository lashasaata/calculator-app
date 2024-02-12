const display = document.getElementById("display");
const numbers = document.getElementsByClassName("number");
const deletes = document.getElementById("delete");
const reset = document.getElementById("reset");
const equal = document.getElementById("equal");

let numbersArr = Array.from(numbers);
numbersArr.forEach((element) => {
  element.addEventListener("click", (event) => {
    let displaystext = display.innerText;
    let value = event.target.innerText;

    if (
      Number(display.innerText) == 0 &&
      [...displaystext][[...displaystext].length - 1] !== "."
    ) {
      displaystext = "";
    }
    if (
      (Number(display.innerText) == 0 || [...displaystext].length == 0) &&
      isNaN(Number(value))
    ) {
      if (value == ".") {
        value = ".";
        displaystext = "0";
      } else {
        value = "";
        displaystext = display.innerText;
      }
    }
    let length = [...displaystext].length;
    let displayArr = [...displaystext];

    if (isNaN(Number([...displaystext][length - 1])) && isNaN(Number(value))) {
      displayArr.splice(length - 1, 1);
    }

    displayArr.push(value);

    let newText = displayArr.join("");
    // trying set "," after 3 number but needs finish
    // let innerText = newText.replace(/,/g, "");
    // let parts = innerText.split(".");
    // let firstPart = parts[0].split("");
    // let numbersLength = firstPart.length;
    // for (let i = 1; numbersLength / 3 > i; i++) {
    //   firstPart.splice(numbersLength - i * 3, 0, ",");
    // }

    // firstPart = firstPart.join("");
    // parts[0] = firstPart;
    // if (parts.length > 1) {
    //   parts.splice(1, 0, ".");
    // }
    // newText = parts.join("");

    display.innerText = `${newText}`;
  });
});

deletes.addEventListener("click", () => {
  let text = display.innerText;
  let displayArr = [...text];
  displayArr.splice(displayArr.length - 1, 1);
  let newText = displayArr.join("");
  display.innerText = `${newText}`;
  if ([...Array.from(text)].length == 0) {
    display.innerText = "0";
  }
});

equal.addEventListener("click", () => {
  let exactStr = display.innerText;

  let stringWithoutCommas = exactStr.replace(/,/g, "").replace(/x/g, "*");
  let evaluated = eval(stringWithoutCommas);
  let floored = Math.floor(evaluated * 1e6) / 1e6;
  if (isNaN(floored)) {
    floored = "";
  }
  display.innerText = `${floored}`;
});

reset.addEventListener("click", () => {
  display.innerText = "0";
});

// changable themes
const range = document.getElementById("switch");
range.addEventListener("change", (event) => {
  let rangeValue = event.target.value;
  switch (Number(rangeValue)) {
    case 1:
      document.body.classList.add("theme1");
      document.body.classList.remove("theme2", "theme3");
      break;
    case 2:
      document.body.classList.add("theme2");
      document.body.classList.remove("theme1", "theme3");
      break;
    case 3:
      document.body.classList.add("theme3");
      document.body.classList.remove("theme1", "theme2");
      break;
    default:
      document.body.classList.add("theme1");
      document.body.classList.remove("theme2", "theme3");
  }
});
