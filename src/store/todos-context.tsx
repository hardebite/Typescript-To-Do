import Todo from "../models/todo";
import React, { PropsWithChildren, useState } from "react";
type TodoContextObj ={
    items:Todo[];
    addTodo:(text:string) => void;
    removeTodo: (id:string) => void
}
export const TodoContext =  React.createContext<TodoContextObj>({
    items:[],
    addTodo: () => {},
    removeTodo : (id:string) => {}
});

const TodoContextProvider:React.FC <PropsWithChildren>= ({children}) => {
    const[todos,setTodos] = useState< Todo[]>([]);
  const addTodoHandler = (todoText:string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevValue) => {
      // return [...prevValue,newTodo]
      return prevValue.concat(newTodo);
    })
  }
  const handleDelete= (todoId:string) => {
    setTodos((prevValue) => {
      return prevValue.filter(todo => todo.id !== todoId);
    })
    
    
  }
  const contextValue:TodoContextObj = {
    items:todos,
    addTodo: addTodoHandler,
    removeTodo: handleDelete
  }
    return<TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
};
export default TodoContextProvider;