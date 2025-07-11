import React,{useState} from 'react';
function MyComponent() {
    const[name,setName]=useState("");
    const[quantity,setQuantity]=useState(0);
    const[comment,setComment]=useState("");
    const[payment,setPayment]=useState("");
    const[shipping,setShipping]=useState("")



    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    return(
        <div>
            <input value={name} onChange={handleNameChange} placeholder='Guest'/>
            <p>Name: {name}</p>
            <input value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter your comment here"/>
            <p>Comment: {comment}</p>
            
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">select method</option>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
                <option value="paypal">PayPal</option>
            </select>
            <p>Payment: {payment}</p>
            <label>
                <input type="radio" value="pick up" onChange={handleShippingChange}/>
                Pick Up
            </label>
            <label>
                <input type="radio" value="delivery" onChange={handleShippingChange}/>
                Delivery
            </label>
            <label>
                <input type="radio" value="express" onChange={handleShippingChange}/>
                Express
            </label>
            <p>Shipping: {shipping}</p>
            

           

            
        </div>
    );
}
export default MyComponent;