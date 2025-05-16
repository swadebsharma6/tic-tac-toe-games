import { useState } from "react";

const Square = ({value, onSquareClick}) => {
  // const [value, setValue] = useState(null)
  
  // const handleClick =()=>{
  //   // setValue('X')
  // }

  return (
    <button onClick={onSquareClick} className="w-16 h-16 m-2 bg-cyan-500 rounded-md border border-gray-200">
     {value}
    </button>
  );
};




const Board = () => {
  const [squares, setSquares] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  console.log(squares)

  const handleClick= (idx) =>{

    
    if(squares[idx]){
      return;
    }

    const nextSquares = squares.slice(); //create a new squares
    //  nextSquares[idx]= "X"; // first code 
     if(xIsNext){
      nextSquares[idx]= "X";
     }else{
      nextSquares[idx] ='O';
     }

     setSquares(nextSquares);
     setXIsNext(!xIsNext)
  }

  return (
    <>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() =>handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() =>handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() =>handleClick(2)}/>
        
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() =>handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() =>handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() =>handleClick(5)}/>
      </div>    
      <div className="flex">
       <Square value={squares[6]} onSquareClick={() =>handleClick(6)}/>
       <Square value={squares[7]} onSquareClick={() =>handleClick(7)}/>
       <Square value={squares[8]} onSquareClick={() =>handleClick(8)}/>
      </div>
    </>
  );
};

export default Board;
