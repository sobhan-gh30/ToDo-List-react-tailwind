import "../output.css"
import { IoMdDoneAll } from "react-icons/io";
export default function TaskInput(){
    return (
        <div className="border w-80 h-14 bg-white p-2 flex justify-between items-center">
            <input type="text" className="h-full w-5/6 outline-0 text-xl"/>
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-white shadow-md hover:shadow-inner  cursor-pointer border border-zinc-100">
                <IoMdDoneAll className="scale-150"/>
            </div>
        </div>
    )
}