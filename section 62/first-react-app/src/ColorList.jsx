function ColorList({ colors = []}){
    return (
        <ul>
            {colors.map((c) => <li style={{color: c}}>{c.toUpperCase()}</li>)}
        </ul>
    )
}

export default ColorList;