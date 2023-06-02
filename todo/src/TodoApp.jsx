import React from 'react';
import './TodoApp.css';
import { FaSun } from "react-icons/fa";
import TodoItem from './components/TodoItem';

export default function TodoApp() {
    return (
        <div className='container'>
            <div className='header'>
                <div className='mode'>
                    <FaSun className='sun' />
                </div>
                <div className='tab'>
                    <a className='filter' href='#'>All</a>
                    <a className='filter' href='#'>Active</a>
                    <a className='filter' href='#'>Completed</a>
                </div>
            </div>
            <div className='main'>
                <TodoItem content="산책하기" />
                <TodoItem content="강의듣기" />
                <TodoItem content="공부하기" />
            </div>
            <div className='footer'>
                <div className='addWrap'>
                    <input placeholder='Add TODO' />
                    <button>Add</button>
                </div>
            </div>
        </div>
    );
}

