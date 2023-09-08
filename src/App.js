import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/appSlice";
function App() {
  const dispatch=useDispatch();
  const count=useSelector((store)=>store.count);
  
  const handleInc=()=>{
    dispatch(increment());
  }

  const handleDec=()=>{
    dispatch(decrement());
  }

  return (
    <div className=" justify-center h-20 align-middle grid grid-flow-row p-20">
      <div className="text-3xl text-center mb-5">{count}</div>
      <div className="flex">
        <button className="p-3 border border-gray-500 rounded-lg mr-10" onClick={handleInc}>
          Increment
        </button>
        <button className="p-3 border border-gray-500 rounded-lg" onClick={handleDec}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
