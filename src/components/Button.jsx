
const Button=({text,onclick})=>{
    return(
        <button className="h-12 w-15 bg-red-300 cursor-pointer" onClick={onclick}>
{text}
        </button>
    )
}
export default Button;