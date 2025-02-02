import { useState } from "react";
import { v4 as uuid } from "uuid"
import ShoppingListForm from "./ShoppingListForm";
function ShoppingList() {
    const [items, setitems] = useState([
        { id: uuid(), product: "pine", quantity: 8 },
        { id: uuid(), product: "lime", quantity: 30 }
    ])
    const additems = (item) => {
        setitems((curritems) => {
            return [...curritems, { ...item, id: uuid() }]
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

