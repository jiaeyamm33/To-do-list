import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';
import styles from './todolist.module.css';


function TodoList({filter}) {
  const getTodos = () => {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
  }
  const [todos, setTodos] = useState(()=> getTodos());
  const AddList = (todo) => {
    // 새로운 투두리스트를 업데이트 해야 함
  setTodos([...todos, todo])
  }

  const updateList = (updated) => {
    setTodos(todos.map(item => (item.id === updated.id ? updated : item)))
  }

  const deleteList = (deleted) => setTodos(todos.filter((item) => item.id !== deleted.id))

  const getFilteredItems = (todos, filter) => {
    if(filter === 'all') {
      return todos;
    } 
      return todos.filter(todo => todo.status === filter);
  }
  const filtered = getFilteredItems(todos, filter);

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {
          filtered.map((item) => (
          <Todo key={item.id}
           todo={item} 
           onUpdate={updateList} 
           onDelete={deleteList}
           />
          ))} 
      </ul>
      <AddTodo
      todos={todos}
      onAdd={AddList}/>
    </section>
  );
}

export default TodoList;