/**
 * @module show-email
 * Logic for obscuring an email address, but allow it to be displayed unobscured in an HTML element
 * @author Jonas Persson
 * /
*/

var user = "sanoj";
var dm = "ved.nossrepsanoj@"

const btnShowEmail = window.document.getElementById("show-email");
btnShowEmail.addEventListener("click", showEmail);

const doButton = window.document.getElementById("do");
doButton.addEventListener("click", doFunction);

function showEmail() {
  document.getElementById("email-address").textContent = revString(user) + revString(dm);
}

function revString(str) {
  return str.split("").reverse().join("");
}

function copyElemText(elem) {
  return document.getElementById(elem).textContent;
}

function doFunction() {
  alert("do button pressed and doFunction() executed");
}

function fallbackCopy(text) {

}

function copyTextToClipboard() {
    if (!navigator.clipboard) {
      fallbackCopy(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Copied to clipboard successfully with the Async Clipboard API');
    }, function(err) {
      console.error('Async Clipboard API', err);
    });
  }

function copyEmailAddr() {
  let text = copyElemText("email-address");
  alert("text: " + text)
} 