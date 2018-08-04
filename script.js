var board;
var currentPlayer = 'X';
var winner = false;
const cells = document.querySelectorAll('.cell');

newGame();

function newGame() {
	board = Array.from(Array(9).keys());
	for (var i = 0; i < cells.length; i++){
		cells[i].innerText = '';
		cells[i].addEventListener('click', newTurn, false);
	
	}
	currentPlayer = 'X';
	nowPlaying();

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

	if(calculateWinner(board) !== null){
		winner = true;	
	}else{
		turn(square.target.id, currentPlayer);
		cells[this.id].removeEventListener('click', newTurn ,false);
		switchPlayer();
	}
	// console.log(calculateWinner(board));
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

function calculateWinner(squares) {
	const lines = [
	  [0, 1, 2],
	  [3, 4, 5],
	  [6, 7, 8],
	  [0, 3, 6],
	  [1, 4, 7],
	  [2, 5, 8],
	  [0, 4, 8],
	  [2, 4, 6]
	];
	for (let i = 0; i < lines.length; i++) {
	  const [a, b, c] = lines[i];
		console.log('a ', squares[a]);
		console.log('b ', squares[b]);
		console.log('c ', squares[c]);
	  if (squares[a] === squares[b] && squares[a] === squares[c] && squares[b] === squares[c]) {
		  console.log('the winner is ', squares[a] );
		return squares[a];
	  }

	}
	return null;

  }

