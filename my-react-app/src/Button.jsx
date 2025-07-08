function Button(){
    const handleClick=(e)=> e.target.textContent="OUCH! 🤕";
    return(<button onDoubleClick={(e)=>handleClick(e)}>click me 😁</button>);
}
export default Button;