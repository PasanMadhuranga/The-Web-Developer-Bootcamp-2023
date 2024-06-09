import Rating from "@mui/material/Rating";
import { useState } from "react";

export default function RatingsDemo() {
    const [score, setScore] = useState(1)
  return (
    <div>
        <h1>Rating: {score}</h1>
      <Rating
        name="simple-controlled"
        value={score}
        onChange={(event, newValue) => {
          setScore(newValue);
        }}
        precision={0.5}
      />
    </div>
  );
}
