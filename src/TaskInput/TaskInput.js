import "../output.css"
import {FaPlus, FaRegTrashAlt} from "react-icons/fa";
import {useState} from "react";
import Categories from "../categories/catagories";
import {IoMdDoneAll} from "react-icons/io";

let nextId = 0;

export default function TaskInput(){
    let [taskInputValue , setTaskInputValue] = useState("")
    let [todo, setTodo] = useState([]);


    function setNewTodo(){
        if (taskInputValue.trim() !== "") {
            setTodo([...todo, { id: nextId++, todo: taskInputValue , completed : false }]);
            setTaskInputValue("");
        } else {
            alert("Please enter a task");
        }
    }
    function isDone(event){
        console.log(event)
    }
    function toggleComplete(id) {
        setTodo(todo.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
    }

    function removeTodo(id) {
        setTodo(todo.filter(item => item.id !== id));
    }


    return (
        <div className="w-[30rem]">
            <div className="flex justify-between items-center">

            <div className="border w-80 h-14 bg-white p-2 flex justify-between items-center">
                <input id="todo_input" value={taskInputValue} onChange={(event) => {
                    setTaskInputValue(event.target.value)
                }} type="text" className="h-full w-5/6 outline-0 text-xl"/>
                <div
                    onClick={setNewTodo}
                    className="w-10 h-10 rounded-full flex justify-center items-center bg-white shadow-md hover:shadow-inner cursor-pointer border border-zinc-100">
                    <FaPlus className="scale-150"/>
                </div>
            </div>
            <Categories />
            </div>
            <div className="w-full h-12 py-16">
                <h1 className="text-center text-3xl font-bold drop-shadow-lg text-white mb-10">To Do ✌️</h1>
                <div className="mt-4">
                    {todo.length > 0 ? (
                        <ul>
                            {todo.map((item) => {

                                return (
                                <li key={item.id}
                                    className="w-full h-14 bg-white flex justify-between items-center px-2 mb-3">
                                    <h2 className={`text-xl ${item.completed ? "line-through text-gray-500" : ""}`}>{item.todo}</h2>
                                    <div className="w-fit h-full flex justify-center items-center gap-1">
                                        <button
                                            onClick={() => toggleComplete(item.id)}
                                            className="w-8 h-8 bg-emerald-600 hover:bg-emerald-700 transition flex justify-center items-center rounded-full">
                                            <IoMdDoneAll className="scale-110 text-white"/>
                                        </button>
                                        <button
                                            onClick={() => removeTodo(item.id)}
                                            className="w-8 h-8 bg-rose-600 hover:bg-rose-700 transition flex justify-center items-center rounded-full">
                                            <FaRegTrashAlt className="scale-110 text-white"/>
                                        </button>
                                    </div>
                                </li>
                            )})}
                        </ul>
                    ) : (
                        <p className="text-center text-gray-200">No tasks yet!</p>
                    )}
                </div>
            </div>
        </div>
    )
}