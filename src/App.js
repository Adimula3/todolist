
import './App.css';
import {useState} from "react";

function App() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todo !== "")  {

            setTodos([{id:`${todo}-${Date.now()}` , todo}, ...todos])
            setTodo("");
        }
    }
    const handleDelete = (id) => {
        const delTodo = todos.filter((to) => to.id !== id)
        setTodos([...delTodo]);
    }
    const handleEdit = () => {

    }

  return (
    <div className="App">
        <div className="container">
            <h1>Todo List App</h1>
            <form className="todoForm" onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
                <button type="submit">Go</button>
            </form>

            <ul className="allTodos">
                {todos.map(((t) =>
                        <li className="singleTodos"><span className="todoText" key={t.id}>{t.todo}</span>
                            <button onClick={() => handleEdit(t.id)}>Edit</button>
                            <button onClick={() => handleDelete(t.id)}>Delete</button>
                        </li>
                    ))}

            </ul>
        </div>
    </div>
  );
}

export default App;
