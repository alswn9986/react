import React from 'react';
import { FiTrash2 } from "react-icons/fi";


export default function TodoItem(props) {
    const handleDelete = () => {
        props.handleDelete(props.item.id);
    }

    const handleChangeCheck = (e) => {
        props.handleChangeCheck({...props.item, 'status': e.target.checked ? 'c' : 'a'});
    }

    return (
        <div className='listWrap'>
            <input type='checkbox' checked={props.item.status === 'c'} onChange={handleChangeCheck} />
            <span>{props.item.content}</span>
            <FiTrash2 onClick={handleDelete} />
        </div>
    );
}