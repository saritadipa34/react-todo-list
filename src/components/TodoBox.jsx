import Button from "./Button";
import Task from "./Task";

const TodoBox=()=>{
    return(
        <div className="max-h-[400px] w-[500px] bg-yellow-400 py-8 px-10" >
            <h1 className="text-2xl font-bold text-center mb-5">Todo List</h1>
            <div className="flex">
            <input type="text" className="w-3/4 h-12 bg-green-300 mb-5" maxLength={20} />
            <Button text={"Add"}/>
            </div>
        </div>
    )
}
export default TodoBox;