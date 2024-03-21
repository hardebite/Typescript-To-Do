import React, { useRef,useContext } from "react";
import classes from'./NewTodo.module.css'
import { TodoContext } from "../store/todos-context";

const NewTodo:React.FC = () => {
    const todoInputRef= useRef<HTMLInputElement>(null)
    const todoCtx = useContext(TodoContext)
    const submitHandler = (e:React.FormEvent) => {
        e.preventDefault()
        const enteredText = todoInputRef.current!.value; // when you are certain it wont be null
        // const enteredText = todoInputRef.current?.value; if you are not sure if the value wont be null
        if(enteredText.trim().length === 0){
            return;
        }
    todoCtx.addTodo(enteredText);

    }
    return (<form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo </label>
        <input ref={todoInputRef} type="text"  id="text"/>
        <button >Add To Do</button>
    </form>)
};
export default NewTodo;