// Code Keypad Component Here

function Keypad (){
    function handleKeypad(event){
        event.preventDefault()
        console.log("Entering password...")
    }
    return (
        <div>
            <input
            type="password"
            onChange={handleKeypad}/>
        </div>
    )
}

export default Keypad;
