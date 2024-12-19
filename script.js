let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button"); // Select all buttons
let string = "";

// Convert buttons to an array and loop over them
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerHTML;

    // Handle the clear button
    if (value === "C") {
      string = "";
      input.value = string;
    }
    // Handle the delete button (trash icon)
    else if (button.querySelector(".fa-trash-alt")) {
      string = string.substring(0, string.length - 1);
      input.value = string;
    }
    // Evaluate the result when '=' is clicked
    else if (value === "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    }
    // Append other button values to the input
    else {
      string += value;
      input.value = string;
    }
  });
});
