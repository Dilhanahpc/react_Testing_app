import PropTypes from 'prop-types';
function List({ items = [], category = "Category" }){


   // fruits.sort((a,b)=>a.name.localeCompare(b.name)); 
   // fruits.sort((a,b)=>b.name.localeCompare(a.name));
   // fruits.sort((a,b)=>a.calories-b.calories);
    //fruits.sort((a,b)=>b.calories-a.calories);  
    
    //const highCalFruits=fruits.filter(fruit=>fruit.calories>=60);

    const listItems = items.map(item =>
                                            <li key={item.id}>
                                            {item.name} - 
                                            <b>{item.calories}</b> 
                                            calories</li>)
    return(<>
    
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{listItems}</ul>
            </>
    );

}
// Removed deprecated List.defaultProps
export default List;