import React from 'react';
import './TodoApp.css';
import { FaSun } from "react-icons/fa";

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
                MIDDLE
            </div>
            <div className='footer'>
                <div>
                    <input placeholder='Add TODO' />
                    <button>Add</button>
                </div>
            </div>
        </div>
    );
}

