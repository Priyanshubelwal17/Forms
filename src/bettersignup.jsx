import { useState } from "react";

function BetterSignupForm() {
    const [formData, setFormData] = useState({ firstname: "", lastname: "", password: "" })
    const handleSubmit = () => {
        console.log(formData)
    }
    const handlechange = (evt) => {
        const changefield = evt.target.name;
        const newValue = evt.target.value;
        setFormData((currdata) => {
            currdata[changefield] = newValue
            return { ...currdata }
        })
    }

    return (
        <div>
            <label htmlFor="firstname">Enter a Lastname</label>
            <input
                onChange={handlechange}
                type="text"
                placeholder="First name"
                value={formData.firstname}
                id="firstname"
                name="firstname" />
            <label htmlFor="lastname">Enter a Lastname</label>
            <input
                onChange={handlechange}
                type="text"
                placeholder="Last name"
                value={formData.lastname}
                id="lastname"
                name="lastname" />
            <label htmlFor="password">Enter a Password</label>
            <input
                onChange={handlechange}
                type="password"
                placeholder="Password"
                value={formData.password}
                id="password"
                name="password" />
            <button onClick={handleSubmit} >Submit</button>
        </div>
    )
}

export default BetterSignupForm;