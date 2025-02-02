import { useState } from "react";
import { validate } from "uuid";

function ValidateShoppingListForm({ additems }) {
    const [formData, setFormData] = useState({ product: "", quantity: 0 })
    const [productIsvalid, setproductIsvalid] = useState(false)
    const validate = (product) => {
        if (product.length === 0) {
            setproductIsvalid(false)
        } else {
            setproductIsvalid(true)
        }
    }
    const handleChange = (evt) => {
        if (evt.target.name === "product") {
            validate(evt.target.value)
        }
        setFormData((currvalue) => {
            return {
                ...currvalue,
                [evt.target.name]: evt.target.value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (productIsvalid) {
            additems(formData)
            setFormData({ product: "", quantity: 0 })
            setproductIsvalid(false)
        }

    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <h1>Product is : {formData.product} and quantitiy is: {formData.quantity} </h1>
            <label htmlFor="product">Product Name</label>
            <input
                type="text"
                placeholder="product name"
                name="product"
                id="product"
                onChange={handleChange}
                value={formData.product} />
            {!productIsvalid && (
                <p style={{ color: "red" }}>Product name cannot be empty</p>
            )}
            <label htmlFor="quantitiy">Quantity </label>
            <input
                type="number"
                placeholder="1"
                name="quantity"
                id="quantity"
                onChange={handleChange}
                value={formData.quantity} />
            <button disabled={!productIsvalid} >Add item</button>
        </form>
    )
}

export default ValidateShoppingListForm;