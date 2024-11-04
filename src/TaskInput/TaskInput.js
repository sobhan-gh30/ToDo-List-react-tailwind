import "../output.css"
import {FaPlus, FaRegTrashAlt} from "react-icons/fa";
import {useState} from "react";
import Categories from "../categories/catagories";
import {IoMdDoneAll} from "react-icons/io";

let nextId = 0;

export default function TaskInput(){
    let [taskInputValue , setTaskInputValue] = useState("")
    let [todo, setTodo] = useState([]);
    let [filter, setFilter] = useState("All");


    function setNewTodo(){
        if (taskInputValue.trim() !== "") {
            setTodo([...todo, { id: nextId++, todo: taskInputValue , completed : false }]);
            setTaskInputValue("");
        } else {
            alert("Please enter a task");
        }
    }
    function toggleComplete(id) {
        setTodo(todo.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
    }

    function removeTodo(id) {
        setTodo(todo.filter(item => item.id !== id));
    }

    function getFilteredTodos() {
        if (filter === "Completed") return todo.filter(item => item.completed);
        if (filter === "Uncompleted") return todo.filter(item => !item.completed);
        return todo;
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
                <Categories setFilter={setFilter}/>
            </div>
            <div className="w-full h-12 py-16">
                <h1 className="text-center text-3xl font-bold drop-shadow-lg text-white mb-10">To Do ✌️</h1>
                <div className="mt-4">
                    {getFilteredTodos().length > 0 ? (
                        <ul>
                            {getFilteredTodos().map((item) => (
                                <li
                                    key={item.id}
                                    className={`w-full h-14 flex justify-between items-center px-2 mb-3 bg-white`}
                                >
                                    <h2 className={`text-xl ${item.completed ? "line-through text-gray-500" : ""}`}>{item.todo}</h2>
                                    <div className="w-fit h-full flex justify-center items-center gap-1">
                                        <button
                                            onClick={() => toggleComplete(item.id)}
                                            className="w-8 h-8 bg-emerald-600 hover:bg-emerald-700 transition flex justify-center items-center rounded-full"
                                        >
                                            <IoMdDoneAll className="scale-110 text-white" />
                                        </button>
                                        <button
                                            onClick={() => removeTodo(item.id)}
                                            className="w-8 h-8 bg-rose-600 hover:bg-rose-700 transition flex justify-center items-center rounded-full"
                                        >
                                            <FaRegTrashAlt className="scale-110 text-white" />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-center text-gray-200">No tasks yet!</p>
                    )}
                </div>
            </div>
        </div>
    )
}