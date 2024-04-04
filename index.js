var DODGER = document.getElementById('dodger');
var GAME_WIDTH = 400; // Assuming the width of your game area is 400 pixels
var DODGER_WIDTH = 40; // Assuming the width of the dodger element is 40 pixels

function moveDodgerLeft() {
    var leftNumbers = DODGER.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);

    if (left > 0) {
        DODGER.style.left = `${left - 4}px`;
    }
}

function moveDodgerRight() {
    var leftNumbers = DODGER.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);

    if (left < GAME_WIDTH - DODGER_WIDTH) {
        DODGER.style.left = `${left + 4}px`;
    }
}

