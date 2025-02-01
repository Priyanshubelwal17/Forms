import { useState } from "react";

function SignupForm() {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")

    const updateFirstname = (evt) => {
        console.log("Change Event!!")
        setFirstname(evt.target.value)
    }
    const updateLastname = (evt) => {
        console.log("Change Event!!")
        setLastname(evt.target.value)
    }
    const handleSubmit = () => {
        console.log(firstname, lastname)
    }

    return (
        <div>
            <label htmlFor="firstname">Enter a Lastname</label>
            <input
                onChange={updateFirstname}
                type="text"
                placeholder="Firstname"
                value={firstname}
                id="firstname" />
            <label htmlFor="lastname">Enter a Lastname</label>
            <input
                onChange={updateLastname}
                type="text"
                placeholder="Lastname"
                value={lastname}
                id="lastname" />
            <button onClick={handleSubmit} >Submit</button>
        </div>
    )
}

export default SignupForm;