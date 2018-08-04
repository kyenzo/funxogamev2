var board;
var currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');

newGame();

function newGame() {
	board = Array.from(Array(9).keys());
	document.getElementById('playsNow').innerHTML="Player 1";
	for (var i = 0; i < cells.length; i++){
		cells[i].innerText = '';
		cells[i].addEventListener('click', newTurn, false);
	}
	currentPlayer = 'X';
}

function nowPlaying(){
	if(currentPlayer === 'X'){
		document.getElementById('playsNow').innerHTML="Player 1";
		document.getElementById('playsNow').style.color="#92162B";
	}
	else {
		document.getElementById('playsNow').innerHTML="Player 2";
		document.getElementById('playsNow').style.color="#1F87BE";
	}
}

function newTurn(square){
	turn(square.target.id, currentPlayer);
	cells[this.id].removeEventListener('click', newTurn ,false);
	switchPlayer();
}

function switchPlayer(){
	if (currentPlayer === 'X'){
		currentPlayer = 'O';
	}else 
		currentPlayer = 'X';
}

function turn(squareId, currentPlayer){
	board[squareId] = currentPlayer;
	document.getElementById(squareId).innerText = currentPlayer;
}