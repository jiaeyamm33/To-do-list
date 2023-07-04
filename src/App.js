import {useState}from 'react';
import TodoList from './components/TodoList';
import Header from './components/Header';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  const filters = ['all', 'active', 'completed']
  const [filter, setFilter] = useState('all');
  return (
    <DarkModeProvider>
    <Header
    filters={filters} 
    filter={filter}
    onFilterChange={setFilter}
    />
    <TodoList 
    filter={filter}
    />
    </DarkModeProvider>
  );
}

export default App;
