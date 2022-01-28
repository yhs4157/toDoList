import React from 'react'; 
import TodoListItem from './TodoListItem';
import styles from './TodoList.module.css';

const TodoList = () => {
    return (
        <div className={styles.TodoList}>
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </div>
    );
}

export default TodoList; 