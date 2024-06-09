import TextField from "@mui/material/TextField"
import { useState } from "react"

export default function FormsDemo(){
    const [name, setName] = useState('')
    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            <p>Name is {name}</p>
            <TextField id="standard-basic" label="Name" variant="filled" value={name} placeholder="Pasan" onChange={handleChange} />
        </div>
    )
}