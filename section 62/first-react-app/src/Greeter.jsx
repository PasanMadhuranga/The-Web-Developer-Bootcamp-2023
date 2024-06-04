function Greeter({ person="everyone", from="Pasan" }) {
    return (
        <div>
            <h1>Hi {person}!!!</h1>
            <p>From {from}</p>
        </div>
    )
}

export default Greeter;