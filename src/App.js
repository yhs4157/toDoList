import React from 'react'; 
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

const [todos, setTodos] = useState([
  {
    id: 1, 
    text: '리액트의 기초 알아보기',
    check: true, 
  },
  {
    id: 2, 
    text: '컴포넌트 스타일링해 보기',
    check: true, 
  },
  {
    id: 3, 
    text: '일정 관리 앱 만들어 보기',
    check: false, 
  },
]);

function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos = {todos}/>
    </TodoTemplate>
  );
}

export default App;
