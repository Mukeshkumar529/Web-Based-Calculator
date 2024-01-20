const C_Frame = document.querySelector("#C_Frame");
const light_color = document.querySelector(".uil-sun");
const dark_color = document.querySelector(".uil-moon");
const btn_c = document.querySelectorAll(".btn-c");

const btn_one = document.querySelector(".btn-1");
const btn_two = document.querySelector(".btn-2");
const btn_three = document.querySelector(".btn-3");
const btn_four = document.querySelector(".btn-4");
const btn_five = document.querySelector(".btn-5");
const btn_six = document.querySelector(".btn-6");
const btn_seven = document.querySelector(".btn-7");
const btn_eight = document.querySelector(".btn-8");
const btn_nine = document.querySelector(".btn-9");
const btn_zero = document.querySelector(".btn-0");
const btn_clean = document.querySelector(".btn-back");
const btn_clear = document.querySelector(".clear");
const btn_multiply = document.querySelector(".btn-multiply");
const btn_divide = document.querySelector(".divide");
const btn_p_slash_m = document.querySelector(".p-slash-m");
const btn_percentage = document.querySelector(".percentage");
const btn_minus = document.querySelector(".btn-minus");
const btn_plus = document.querySelector(".btn-plus");
const btn_point = document.querySelector(".btn-dot");
const btn_equal = document.querySelector(".btn-equal");

const input_Value = document.querySelector(".user-Input");
const solved_Value = document.querySelector(".solved-Input");

function toggleMode() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
}

// Event listener for button click
document.querySelector(".light").addEventListener("click", () => {
  C_Frame.style.backgroundColor = "azure";
  document.querySelector(".light").style.backgroundColor = "#ddee88";
  light_color.style.color = "#212121";
  document.querySelector(".dark").style.backgroundColor = "none";
  btn_c.forEach.style.backgroundColor = "#2d4ee2";
});

document.querySelector(".dark").addEventListener("click", () => {
  C_Frame.style.backgroundColor = "black";
  document.querySelector(".dark").style.backgroundColor = "#212121";
  dark_color.style.color = "#fffd";
  document.querySelector(".light").style.backgroundColor = "aliceblue";
});

function appendToInput(value) {
  input_Value.value += value;
}

function cleanInput() {
  input_Value.value = "";
  solved_Value.value = "";
}

function clearInput() {
  var userInputValue = input_Value.value;

  if (userInputValue.length > 0) {
    input_Value.value = userInputValue.slice(0, -1);
  }
}

function toggleSign() {
  input_Value.value = (parseFloat(input_Value.value) * -1).toString();
}

function calculateResult() {
  try {
    const inputExpression = input_Value.value;

    const result = eval(inputExpression);

    if (isNaN(result) || !isFinite(result)) {
      throw new Error("Invalid expression");
    } else {
      solved_Value.value = result;
    }
  } catch (error) {
    solved_Value.value = "Error";
  }
}

btn_one.addEventListener("click", () => {
  appendToInput("1");
});
btn_two.addEventListener("click", () => {
  appendToInput("2");
});
btn_three.addEventListener("click", () => {
  appendToInput("3");
});

btn_four.addEventListener("click", () => {
  appendToInput("4");
});

btn_five.addEventListener("click", () => {
  appendToInput("5");
});

btn_six.addEventListener("click", () => {
  appendToInput("6");
});

btn_seven.addEventListener("click", () => {
  appendToInput("7");
});

btn_eight.addEventListener("click", () => {
  appendToInput("8");
});

btn_nine.addEventListener("click", () => {
  appendToInput("9");
});

btn_zero.addEventListener("click", () => {
  appendToInput("0");
});

btn_clean.addEventListener("click", () => {
  clearInput();
});
btn_clear.addEventListener("click", () => {
  cleanInput();
});

btn_multiply.addEventListener("click", () => {
  // appendToInput("×");
  appendToInput("*");
});
btn_divide.addEventListener("click", () => {
  // appendToInput("÷");
  appendToInput("/");
});

btn_percentage.addEventListener("click", () => {
  appendToInput("%");
});

btn_minus.addEventListener("click", () => {
  appendToInput("-");
});

btn_plus.addEventListener("click", () => {
  appendToInput("+");
});

btn_point.addEventListener("click", () => {
  appendToInput(".");
});

btn_equal.addEventListener("click", () => {
  calculateResult();
});

btn_p_slash_m.addEventListener("click", () => {
  toggleSign();
});
