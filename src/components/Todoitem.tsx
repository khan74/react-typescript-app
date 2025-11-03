import React from 'react';
import classes from './TodoItem.module.css';

const Todoitem: React.FC<{ todoText: string, onDeleteTodo: () => void }> = (props) => {
    return <li className={classes.item} onClick={(e) => props.onDeleteTodo()}>{props.todoText}</li>;
}

export default Todoitem;
