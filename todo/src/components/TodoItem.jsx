import React from 'react';
import { FaTrash } from "react-icons/fa";

export default function TodoItem(props) {
    return (
        <div className='listWrap'>
            <input type='checkbox' />
            <span>{props.content}</span>
            <FaTrash />
        </div>
    );
}