function EyesOnMe(){
    function handlefocus(event){
        event.preventDefault()
        console.log("Good!")
    }
    function handleBlur(event){
        event.preventDefault()
        console.log("Hey! Eyes on me!")
    }
return(
    <div>
        <button onFocus={handlefocus} onBlur={handleBlur}>Eyes on me</button>
    </div>
)
}

export default EyesOnMe
