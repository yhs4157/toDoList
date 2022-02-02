import React from 'react'; 
import TodoListItem from './TodoListItem';
import styles from './TodoList.module.css';

const TodoList = ({todos, onRemove}) => {
    return (
        <div className={styles.TodoList}>
            {todos.map((todo) => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove}/>
            ))}
        </div>
    );
}

export default TodoList; 