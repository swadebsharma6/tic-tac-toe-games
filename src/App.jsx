import { useState } from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className="w-16 h-16 m-2 bg-cyan-500 rounded-md border border-gray-200"
    >
      {value}
    </button>
  );
};

const Board = ({ squares, xIsNext, handlePlay }) => {
  // const [squares, setSquares] = useState([Array(9).fill(null)]); // wrong

  // call the winner function
  const winner = calculateWinner(squares);

  let status;

  if (winner) {
    status = `Winner : ${winner}`;
  } else {
    status = `Next Player : ${xIsNext ? "X" : "O"} `;
  }

  // checking the Value of squares and
  const handleClick = (idx) => {
    if (squares[idx] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice(); //create copy a new squares
    //  nextSquares[idx]= "X"; // first code
    if (xIsNext) {
      nextSquares[idx] = "X";
    } else {
      nextSquares[idx] = "O";
    }

    handlePlay(nextSquares)

    // setSquares(nextSquares); //we delete because this is undeed.
    // setXIsNext(!xIsNext);
  };

  return (
    <>
      <div>{status}</div>

      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

const Game = () => {
  // const [squares, setSquares] = useState(Array(9).fill(null)); // previous
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  // const currentSquares = history[history.length - 1];
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    setXIsNext(!xIsNext);

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares ];

    // setHistory([...history, nextSquares])
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1)
  };

  // handleJumpTo function
  const handleJumpTo =(move)=>{
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);

  }

  // History movement
  const moves = history.map((squares, move) => {
    let description;

    if(move > 0){
      description = `Go to the move # ${move}`
    }
    else{
      description = `Go to start the Game!!`
    }
    return(
      <li className="border bg-orange-300 m-1 rounded" key={move}><button onClick={() =>handleJumpTo(move) }>{description}</button></li>
    )
  });

  return (
    <div className="flex justify-center p-4 gap-6">
      <div className="mr-10">
        {/* <Board setSquares={setSquares} squares={squares} xIsNext={xIsNext} setXIsNext={setXIsNext}/> */}
        <Board 
        xIsNext={xIsNext} 
        squares={currentSquares}
        handlePlay={handlePlay} 
         />
      </div>
      <div>
        <h4>History are Comes</h4>
        <ol className="border bg-sky-400  p-2 rounded-lg ">
          {moves}
        </ol>
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default Game;
