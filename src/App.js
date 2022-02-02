import React, {useState,useRef, useCallback} from 'react'; 
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1, 
      text: '리액트의 기초 알아보기',
      checked: true, 
    },
    {
      id: 2, 
      text: '컴포넌트 스타일링해 보기',
      checked: true, 
    },
    {
      id: 3, 
      text: '일정 관리 앱 만들어 보기',
      checked: false, 
    },
  ]);

  const [nextId, setNextId] = useState(4); 

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId, 
      text, 
      checked: false,
    };
    setTodos((current) => current.concat(todo)); 
    setNextId((current) => current + 1);
  }, [todos]);

  console.log(todos); 

  const onRemove = useCallback(id => {
    setTodos((current) => current.filter(todo=> todo.id !== id));
  }, [todos]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert = {onInsert}/>
      <TodoList todos = {todos} onRemove={onRemove}/>
    </TodoTemplate>
  );
}

export default App;
