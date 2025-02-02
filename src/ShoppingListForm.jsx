import { useState } from "react";

function ShoppingListForm() {
    const [formData, setFormData] = useState({ product: "", quantity: 0 })
    const handleChange = (evt) => {
        setFormData((currvalue) => {
            return {
                ...currvalue,
                [evt.target.name]: evt.target.value
            }
        })
    }
    return (
        <form action="">
            <h1>Product is : {formData.product} and quantitiy is: {formData.quantity} </h1>
            <label htmlFor="product">Product Name</label>
            <input
                type="text"
                placeholder="product name"
                name="product"
                id="product"
                onChange={handleChange}
                value={formData.product} />
            <h1></h1>
            <label htmlFor="quantitiy">Quantity </label>
            <input
                type="number"
                placeholder="1"
                name="quantity"
                id="quantity"
                onChange={handleChange}
                value={formData.quantity} />
        </form>
    )
}

export default ShoppingListForm;