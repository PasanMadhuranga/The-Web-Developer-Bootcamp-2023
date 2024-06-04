function ListPicker({ values }){
    const randIdx = Math.floor(Math.random() * values.length);
    const randVal = values[randIdx];
    return (
        <div>
            <p>Values in the list: {values}</p>
            <p>Randomly selected Value: {randVal}</p>
        </div>
    )
}

export default ListPicker;