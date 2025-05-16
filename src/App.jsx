const Square = ({value}) => {
  return (
    <button className="w-16 h-16 m-2 bg-cyan-500 rounded-md border border-gray-200">
     {value}
    </button>
  );
};

const Board = () => {
  return (
    <>
      <div>
        <Square value="1"/>
        <Square value="2" />
        <Square value="3"/>
        
      </div>
      <div>
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div>
       <Square value="7"/>
       <Square value="8"/>
       <Square value="9"/>
      </div>
    </>
  );
};

export default Board;
