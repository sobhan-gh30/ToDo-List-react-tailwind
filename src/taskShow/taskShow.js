import "../output.css";
import {IoMdDoneAll} from "react-icons/io";
import {FaRegTrashAlt} from "react-icons/fa";


export default function TaskShow(props){
    let {id , todo} = props

    console.log(id)
    console.log(todo)
    return (
        <li key={id} className="w-full h-14 bg-white flex justify-between items-center px-2 mb-3">
            <h2 className="text-xl">{todo}</h2>
            <div className="w-fit h-full flex justify-center items-center gap-1">
                <button
                    className="w-8 h-8 bg-emerald-600 hover:bg-emerald-700 transition flex justify-center items-center rounded-full">
                    <IoMdDoneAll className="scale-110 text-white"/>
                </button>
                <button
                    className="w-8 h-8 bg-rose-600 hover:bg-rose-700 transition flex justify-center items-center rounded-full">
                    <FaRegTrashAlt className="scale-110 text-white"/>
                </button>
            </div>
        </li>
    )
}