import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Create from "@mui/icons-material/Create";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("");
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo && addTodo(text);
        setText("");
    };
  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
      <TextField value={text} onChange={handleChange} id="filled-basic" label="New Item" variant="filled" InputProps={{
            endAdornment: <InputAdornment position="end">
                <IconButton type="submit">
                    <Create />
                </IconButton>
            </InputAdornment>,
          }}/>
      </form>
    </ListItem>
  );
}
