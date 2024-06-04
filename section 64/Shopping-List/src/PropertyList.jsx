import PropertyListItem from "./PropertyListItem";

function PropertyList({ properties }) {
  return (
    <ul style={{display: "flex"}}>
      {properties.map((p) => (
        <PropertyListItem key={p.id} {...p} />
      ))}
    </ul>
  );
}

export default PropertyList;   