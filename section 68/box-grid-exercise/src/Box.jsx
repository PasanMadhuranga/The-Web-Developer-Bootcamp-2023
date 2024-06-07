import "./Box.css";

export default function Box({ isActive, toggleFunc }){
    return(
        <div onClick={toggleFunc} className="Box" style={{backgroundColor: isActive ? "red": "grey"}}>
        </div>
    )
}