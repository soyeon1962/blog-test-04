import './styles/App.css';
import TodoList from './components/TodoList.js';
import { useState } from 'react';
import TodoItem from './components/TodoItem.js';
import './styles/Todo.css';

function App() {
  const [input, setInput] = useState(''); //입력값 저장
  const [todos, setTodos] = useState([]); //투두리스트 데이터 저장
  const addTodo = () => {
    if(!input.trim()) return; //빈입력값 검증
    setTodos((prevTodos) => [
      ...prevTodos, //새 배열 생성, 스프레드 연산자
      {id:Date.now(), text:input, completed:false},
      //비어있으면 동작하지 않고 종료
    ]); 
    setInput('')//입력값 초기화 
  };
  //완료상태 토글
  const toggleComplete = (id) => {
    setTodos((prevTodos) => 
    prevTodos.map((todo) => 
      todo.id === id ? {...todo, completed : !todo.completed} : todo)
    )
  };
  //할일 삭제
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='wrap'>
      <div className="card">
        <img src="/images/배경.png" alt="" className='backgroundLine'></img>
        <div className='cardTitle'>
          <h2>TodoList</h2>
          <img src="/images/button01.png" alt="" className='button01'></img>
          <img src="/images/button02.png" alt="" className='button02'></img>
          <img src="/images/button03.png" alt="" className='button03'></img>
        </div>
        <div className="content-wrap">
          <img src="/images/안쪽배경.png" alt="" className='backgroundInnerLine'></img>
          <div className='inputContainer'>
            <input
            type="text"
            placeholder='할 일을 입력하세요...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button className='add' onClick={addTodo}>추가</button>
          </div>
          <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
