let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // Capture element values:
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let error_message = "";
  let error_found = false;

  if (!name) {
    // No value was input
    error_found = true;
    error_message = error_message.concat(
      "No name was entered. Please enter your name.\n"
    );
  }

  if (!email) {
    // No value was input
    error_found = true;
    error_message = error_message.concat(
      "No email address was entered. Please enter your email address.\n"
    );
  }

  if (!message) {
    // No value was input
    error_found = true;
    error_message = error_message.concat(
      "No message was entered. Please enter a message.\n"
    );
  }

  if (error_found) {
    alert(error_message);
    event.preventDefault(); // Leave previous user input so they can correct it
  }
}
