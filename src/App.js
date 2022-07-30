import { useSelector, useDispatch } from "react-redux";
import {useState} from 'react';
import {addTodo} from './reduce/reducer'

function App() {
  const [item, setItem] = useState({});
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.Todo.todo);
  function addItem(e) {
    e.preventDefault();
    dispatch(addTodo(item));
    e.target.elements.todo.value = '';
  }
  return (
    <div className="App">
      {
        todoList.length > 0 && todoList.map((obj) => 
        <div>
          <span>{obj.item}</span>
          <br></br>
        </div>
        )
      }
      <br/>
      <form onSubmit={addItem}>
      <input type="text" name="todo" onChange={(event) => setItem({item: event.target.value})}></input>
      <button>Add</button>
      </form>
    </div>
  );
}

export default App;
