import React,{useState} from "react";
function Counter(){

    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    return(<div>
        
        <button className="increment" onClick={increment}>Increment</button>
        <p></p>
        <p className="counter">Count:{count}</p>
        <p></p>
        <button className="decrement" onClick={decrement}>Decrement</button>
    </div>
    );
}
export default Counter;