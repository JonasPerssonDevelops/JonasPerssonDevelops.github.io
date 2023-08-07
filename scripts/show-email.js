/**
 * @module show-email
 * @description Logic for obscuring an email address, but allow it to be displayed unobscured in an HTML element
 * @author Jonas Persson
 * /
*/

var user = "sanoj";
var dm = "ved.nossrepsanoj@"

const btnShowEmail = window.document.getElementById("show-email");
btnShowEmail.addEventListener("click", showEmail);

function showEmail() {
  document.getElementById("email-address").textContent = reverseString(user) + reverseString(dm);
}
