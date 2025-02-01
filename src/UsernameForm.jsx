import { useState } from "react";

function UsernameForm() {
    const [username, setUsername] = useState("timmy")
    const updateusername = (evt) => {
        console.log("Change Event!!")
        setUsername(evt.target.value)
    }
    return (
        <div>
            <input
                onChange={updateusername}
                type="text"
                placeholder="username"
                value={username}
                id="username" />
            <button>Submit</button>
        </div>
    )
}

export default UsernameForm;