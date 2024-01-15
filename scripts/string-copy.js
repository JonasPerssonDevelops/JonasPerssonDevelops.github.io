/**
 * @module string-copy
 * @description String copying functions
 * @author Jonas Persson
 */

function copyTextIntoClipboardExec(text) {
    let textToCopy = document.createElement('input');
    textToCopy.value = text;
    document.body.insertBefore(textToCopy, document.body.firstChild);
    textToCopy.focus();
    textToCopy.select();
    document.execCommand('copy');
    document.body.removeChild(textToCopy);
}

function copyTextIntoClipboardNav(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    }
    else {
        copyTextIntoClipboardExec(text);
    }
}

if (typeof exports !== 'undefined') {       // Allows for testing under Node
    exports.copyTextIntoClipboardExec = copyTextIntoClipboardExec;
    exports.copyTextIntoClipboardNav = copyTextIntoClipboardNav;
}
