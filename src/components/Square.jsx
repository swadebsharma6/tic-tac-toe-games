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

  const handleClick =(i)=>{
     const newSquares = singleValue.slice();
     newSquares[i] = "X";
     setSingleValue(newSquares);
  }

  return (
    <>
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
