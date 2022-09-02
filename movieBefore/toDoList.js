import { useState } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDo("");
        // state는 항상 새로운 것이여야 함.
        // ...Array이름 => Array의 원소를 가져온다.
        setToDos((currentArray) => [toDo, ...currentArray]);
        console.log(toDos);
    };

    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form>
                <input 
                    onChange={onChange} 
                    value={toDo} 
                    type="text" 
                    placeholder="Write your to do..." 
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default App;