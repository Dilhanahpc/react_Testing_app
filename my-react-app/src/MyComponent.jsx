import React, { useState } from 'react';
function MyComponent(){
    const[name,setName]=useState("Guest");
    const[age,setAge]=useState(0);
    const[isEmployed,setIsEmployed]=useState(false);


    const updateName=()=>{
        setName("John Doe");
    }
    const updateAge=()=>{
        setAge(25);
    }
    const incrementAge=()=>{
        setAge(age+2);
    }
    const EmployedHandeler=()=>{
        setIsEmployed(!isEmployed);
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>set Name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>increment Age</button>
        <p>Is Employed:{isEmployed ? "Yes":"No"}</p>
        <button onClick={EmployedHandeler}>toggle Employment</button>
        </div>);
}
export default MyComponent;