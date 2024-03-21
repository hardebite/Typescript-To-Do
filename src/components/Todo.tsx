import React, { useContext } from "react";
import TodoItem from "./List";
import { TodoContext } from "../store/todos-context";
import classes from './Todos.module.css'

const ToDo: React.FC = () => { //fc stands for functonal component
   const todoCtx = useContext(TodoContext)
    return (
        <ul className={classes.todos}>
            {todoCtx.items.map((item)=> <TodoItem onDeleteTodo={todoCtx.removeTodo.bind(null,item.id)}  key={item.id} text={item.text} /> )}
        </ul>
    )
};
export default ToDo;