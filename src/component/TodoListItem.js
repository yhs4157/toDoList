import React from 'react'; 
import {
    MdCheckBoxOutlineBlank, 
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import styles from './TodoListItem.module.css';
import cn from 'classnames'; 

const TodoListItem = ({todo, onRemove}) => {
    const {id, text, checked} = todo; 

    return (
        <div className={styles.TodoListItem}>
            
            <div className= {cn(styles.checkbox, {[styles.checked]: checked})}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className={styles.text}>{text}</div>
            </div>

            <div className={styles.remove} onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
}

export default TodoListItem; 


// 15줄 변경하였으나 무엇인지를 모름. <div className={styles.checkbox}>
// <div className= {cn(checked, {checked})}>