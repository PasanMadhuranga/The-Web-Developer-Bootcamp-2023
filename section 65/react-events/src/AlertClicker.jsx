// export default function AlertClicker({msg, btnText}){
//     return (
//         <button onClick={() => alert(msg)}>{btnText}</button>
//     )
// }

export default function AlertClicker({msg, btnText}){
    const handleClick = () => {
        alert(msg);
    }
    return (
        <button onClick={handleClick}>{btnText}</button>
    )
}