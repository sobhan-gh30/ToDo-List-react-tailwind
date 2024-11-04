import "../output.css"
export default function Categories({ setFilter }){
    return (
            <select onChange={(e) => setFilter(e.target.value)}
                name="" id="" className="border w-32 h-14 bg-white p-2">
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>
    )
}