import ColorBox from "./ColorBox";
import "./ColorBoxGrid.css";

export default function ColorBoxList({ colors }) {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox key={i} colors={colors} />);
  }
  return <div className="color-box-grid">{boxes}</div>;
}

// export default function ColorBoxList({ colors }) {
//   return (
//     <div className="color-box-list">
//       {[...Array(25)].map((_, i) => <ColorBox key={i} colors={colors} />)}
//     </div>
//   );
// }
