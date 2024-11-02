import "../output.css"
import { FaPlus } from "react-icons/fa";
import {useState} from "react";
import Categories from "../categories/catagories";
import TaskShow from "../taskShow/taskShow";
export default function TaskInput(){
    let [taskInputValue , setTaskInputValue] = useState("")
    return (
        <div className="w-[30rem]">
            <div className="flex justify-between items-center">

            <div className="border w-80 h-14 bg-white p-2 flex justify-between items-center">
                <input onChange={(event) => {
                    setTaskInputValue(event.target.value)
                }} type="text" className="h-full w-5/6 outline-0 text-xl"/>
                <div
                    className="w-10 h-10 rounded-full flex justify-center items-center bg-white shadow-md hover:shadow-inner cursor-pointer border border-zinc-100">
                    <FaPlus className="scale-150"/>
                </div>
            </div>
            <Categories />
            </div>
            <div className="w-full h-12 py-16">
                <h1 className="text-center text-3xl font-bold drop-shadow-lg text-white mb-10">To Do ✌️</h1>
                <TaskShow />
                <TaskShow />
            </div>
        </div>
    )
}