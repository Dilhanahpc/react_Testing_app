import List from './List';
function App(){

    const fruits = [
        { id: 1, name: "apple", calories: 52 },
        { id: 2, name: "oranges", calories: 47 },
        { id: 3, name: "banana", calories: 89 },
        { id: 4, name: "kiwi", calories: 61 },
        { id: 5, name: "mango", calories: 50 }
    ];

    const vegetables = [
        { id: 6, name: "carrot", calories: 41 },
        { id: 7, name: "broccoli", calories: 55 },
        { id: 8, name: "spinach", calories: 23 },
        { id: 9, name: "potato", calories: 77 },
        { id: 10, name: "tomato", calories: 18 }
    ];

    
    return (
        <>
            {fruits.length>0 && <List  category="Fruits" />} 
            {vegetables.length>0 && <List items={vegetables} category="Vegetables" />}
        </>
    );
}

export default App;

