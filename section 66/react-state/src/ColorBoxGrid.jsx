import ColorBox from "./ColorBox";
import "./ColorBoxGrid.css";

export default function ColorBoxList({ colors, sizeX = 5, sizeY = 5 }) {
  const boxes = [];
  for (let i = 0; i < sizeX * sizeY; i++) {
    boxes.push(<ColorBox key={i} colors={colors} />);
  }
  return <div className="color-box-grid" style={{gridTemplateColumns: `repeat(${sizeX}, 1fr)`}}>{boxes}</div>;
}

// export default function ColorBoxList({ colors }) {
//   return (
//     <div className="color-box-list">
//       {[...Array(25)].map((_, i) => <ColorBox key={i} colors={colors} />)}
//     </div>
//   );
// }
