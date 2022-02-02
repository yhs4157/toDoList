import React, {useState, useCallback} from 'react'; 
import {MdAdd} from 'react-icons/md';
import styles from './TodoInsert.module.css'

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState(''); 

    const onChange = useCallback(e => {
        setValue(e.target.value); 
    }, []);

    const onSubmit = useCallback(e => {
        e.preventDefault(); 
        onInsert(value); 
        setValue(''); 
    }, [onInsert, value]);

    console.log(value); 

    return (
        <form className={styles.TodoInsert} onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd/>
            </button>

        </form>
    )
}

export default TodoInsert;

/*
const onChange = e => {
        setValue(e.target.value);
}
작동함. 

const onChange = useCallback(e => {
        setValue(e.target.value); 
}, []);
뭔 차이냐? 
리랜더링 시에 사용했던 함수를 재사용할 수 있는 기능을 가지고 있다. 

*/