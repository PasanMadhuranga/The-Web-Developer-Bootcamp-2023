function Die({ sides=6 }) {
  const roll = Math.floor(Math.random() * sides) + 1;
  return (
    <>
      <h3>{sides} sided Die Roll: {roll}</h3>
    </>
  );
}

export default Die;