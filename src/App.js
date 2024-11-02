import "./input.css"
import TaskInput from "./TaskInput/TaskInput";
function App() {

  return (
    <div
        className="w-full h-screen
        bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
         flex justify-start items-center flex-col py-2">
      <h1 className="text-6xl font-bold text-white drop-shadow-lg mb-20">To Do List | Made With React</h1>
        <TaskInput />
    </div>
  );
}

export default App;
