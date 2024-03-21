import { useState } from 'react';
import NewTodo from './components/NewTodo';
import ToDo from './components/Todo';
import Todo from './models/todo';
import { log } from 'console';
import TodoContextProvider from './store/todos-context';


function App() {
  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Learn Typescript')
  // ];
  
  return (
    <TodoContextProvider>
      <NewTodo  />
      <ToDo  />
    </TodoContextProvider>
  );
}

export default App;
