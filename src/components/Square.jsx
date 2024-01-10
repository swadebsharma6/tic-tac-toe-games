import { useState } from "react";


function SingleBox({value, onSquareClick}) {
  return (
    <button 
    onClick={onSquareClick}
    className="bg-white border border-gray-500 h-12 w-12 m-1 leading-9 text-lg">
      {value}
    </button>
  );
}

const Square = () => {

  const [singleValue, setSingleValue]= useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);

  const winner = calculateWinner(singleValue);
  let status;

  if(winner){
    status = `Winner: ${winner}`
  } 
  else{
    status = "Next Player" + (isNext ? "X" : "O")
  }

  const handleClick =(i)=>{

    if(singleValue[i] || calculateWinner(singleValue)){
      return;
    }

     const newSquares = singleValue.slice();
     if(isNext){
      newSquares[i] = "X"
     }
     else{
      newSquares[i] = "O";
     }
    
     setSingleValue(newSquares);
     setIsNext(!isNext);
  }

  return (
    <>
      <div>{status}</div>
      <div className="flex">
        <SingleBox onSquareClick={()=>handleClick(0)} value={singleValue[0]}></SingleBox>
        <SingleBox onSquareClick={()=>handleClick(1)} value={singleValue[1]}></SingleBox>
        <SingleBox onSquareClick={()=>handleClick(2)} value={singleValue[2]}></SingleBox>
       
      </div>
      <div className="flex">
      <SingleBox onSquareClick={()=>handleClick(3)} value={singleValue[3]}></SingleBox>
      <SingleBox onSquareClick={()=>handleClick(4)} value={singleValue[4]}></SingleBox>
      <SingleBox onSquareClick={()=>handleClick(5)} value={singleValue[5]}></SingleBox>
      </div>
      <div className="flex">
      <SingleBox onSquareClick={()=>handleClick(6)} value={singleValue[6]}></SingleBox>
      <SingleBox onSquareClick={()=>handleClick(7)} value={singleValue[7]}></SingleBox>
      <SingleBox onSquareClick={()=>handleClick(8)} value={singleValue[8]}></SingleBox>
      </div>
    </>
  );
};


export default Square;

function calculateWinner(squares) {
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
}


 



