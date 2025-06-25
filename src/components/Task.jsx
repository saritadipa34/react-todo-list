import Button from "./Button";

const Task=({todo,handleEdit})=>{
    return(
        <div className="flex justify-between">
        <p className="h-12 w-3/4 bg-blue-400 flex px-2 items-center text-red-400 ">{todo}</p>
        <div className="flex gap-1">
<Button text={"Edit"} onclick={handleEdit}/>
<Button text={"Delete"}/>
        </div>
        </div>
    )
}
export default Task;