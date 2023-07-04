import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './todo.module.css';

function Todo({todo, onUpdate, onDelete}) {
  const { txt, status, id } = todo;

  const statusChange = (e) => {
    onUpdate({...todo, status: e.target.checked ? 'completed' : 'active'})
  }

  const deleteTodo = (e) => onDelete(todo);
  return (
    <li className={styles.todo}>
      <input type="checkbox" name="" id={`checkbox_${id}`}
       checked={status === 'completed'} 
       className={styles.checkbox}
       onChange={statusChange}/>
      <label htmlFor={`checkbox_${id}`}
      className={styles.txt}
      >{txt}</label>
      <span className={styles.icon}>
      <button className={styles.button} onClick={deleteTodo}>
        <FaTrashAlt />
      </button>
      </span>
    </li>
  );
}

export default Todo;