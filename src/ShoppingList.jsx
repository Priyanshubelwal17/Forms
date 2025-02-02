import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
function ShoppingList() {
    const [items, setitems] = useState([
        { id: 1, product: "pine", quantity: 8 },
        { id: 2, product: "lime", quantity: 30 }
    ])
    const additems = (item) => {
        setitems((curritems) => {
            return [...curritems, { ...item, id: 9 }]
        })
    }
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((i) => (
                    <li key={i.id} >
                        {i.product} - {i.quantity}
                    </li>
                ))}
            </ul>
            <ShoppingListForm additems={additems} />
        </div>
    )
}

export default ShoppingList;