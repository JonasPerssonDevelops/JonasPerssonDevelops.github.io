/**
 * @module contact-page-logic
 * @description contact.html logic
 * @author Jonas Persson
 * /
*/

const user = "sanoj";
const dm = "ved.nossrepsanoj@"

const btnShowEmail = window.document.getElementById('show-email');
btnShowEmail.addEventListener('click', showEmail, false);

const btnCopyEmail = window.document.getElementById('copy-email');
btnCopyEmail.addEventListener('click', function () { copyTextIntoClipboardNav(reverseString(user) + reverseString(dm)) }, false);

function showEmail() {
    document.getElementById('email-address').textContent = reverseString(user) + reverseString(dm);
}
