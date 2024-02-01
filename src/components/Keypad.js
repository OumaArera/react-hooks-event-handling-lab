// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <input type="password" id="password" onChange={() => console.log("Entering password...")} placeholder="Entering password..." />
        </div>
    )
}

export default Keypad;