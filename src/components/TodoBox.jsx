import { useState } from "react";
import Button from "./Button";
import Task from "./Task";

const TodoBox=()=>{
    const [tasks,setTasks]=useState([]);
    const [inputValue,setInputValue]=useState("");

const handleEdit=(index)=>{
const editTask=tasks[index];
const newTask = prompt("edit task",inputValue);
tasks[index]=newTask;
const updatedTask=[...tasks];
setTasks(updatedTask,newTask);
}

    const handleAdd=()=>{
        setTasks([...tasks,inputValue]);
    }

    const handleInput=(e)=>{
        const inputText=e.target.value;
        setInputValue(inputText);
    }

    return(
        <div className="max-h-[520px] w-[600px] bg-yellow-400 py-5 px-10" >
            <h1 className="text-2xl font-bold text-center mb-5">Todo List</h1>
            <div className="flex">
            <input type="text" className="w-3/4 h-12 bg-green-300 mb-5" maxLength={20} 
            onChange={handleInput}/>
            <Button text={"Add"} onclick={handleAdd}/>
            </div>
            <div className="max-h-[300px] bg-red-500 flex flex-col gap-3 overflow-y-scroll ">
            {
                tasks.map((task,index)=>{
                    return <Task inputValue={inputValue} todo={task} key={index} handleEdit={()=>{handleEdit(index)}}/>
                })
            }
        </div>
        </div>
    )
}
export default TodoBox;