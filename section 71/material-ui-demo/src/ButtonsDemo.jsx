import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ButtonsDemo() {
  return (
    <>
      <Button variant="contained">Contained</Button>
      <br />
      <Button variant="outlined" color="success">
        Contained
      </Button>
      <br />
      <Button variant="text" color="error" size="large">
        Contained
      </Button>
      <br />
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </>
  );
}
