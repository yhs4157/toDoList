import React from 'react'; 
import {MdAdd} from 'react-icons/md';
import styles from './TodoInsert.module.css'

const TodoInsert = () => {
    return (
        <form className={styles.TodoInsert}>
            <input
                placeholder="할 일을 입력하세요"
            />
            <button type="submit">
                <MdAdd/>
            </button>

        </form>
    )
}

export default TodoInsert;