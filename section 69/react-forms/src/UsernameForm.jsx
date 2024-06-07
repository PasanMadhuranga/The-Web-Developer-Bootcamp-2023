import { useState } from "react";

export default function UsernameForm() {
    const [username, setUsername] = useState("");
    const updateUsername = (event) => {
        setUsername(event.target.value);
    };
    return (
        <div>
            <label htmlFor="username">Enter Username: </label>
            <input type="text" placeholder="username" id="username" value={username} onChange={updateUsername}/>
            <button type="submit">Submit</button>
        </div>
    );
}