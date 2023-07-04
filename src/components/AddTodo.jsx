import React, {useState} from 'react';
import styles from './addtodo.module.css';

function AddTodo({ onAdd, todos }) {
  const [txt, setTxt] = useState('');

  const txtChange = (e) => {
    setTxt(e.target.value); 
  }
  // todolist 추가하는 함수
  const handleSubmit = (e)=> {
    e.preventDefault();
    if(txt.trim().length === 0) {
      return ;
    }
    const currentId = todos.length > 0 ? todos[todos.length -1].id : 0;
    const newId = currentId + 1;
    onAdd({ id: newId, txt, status: 'active' })
    setTxt('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="text" name='txt' 
      className={styles.input}
      placeholder='Add your To-do-list' 
      value={txt}
      onChange={
      txtChange
      } />
      <button className={styles.button} >Add</button>
    </form>
  );
}

export default AddTodo;