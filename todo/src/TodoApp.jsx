import React from 'react';
import './TodoApp.css';
import { FaSun, FaTrash } from "react-icons/fa";

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
                <div className='listWrap'>
                    <input type='checkbox'></input>
                    <span>강의보기</span>
                    <FaTrash />
                </div>
                <div className='listWrap'>
                    <input type='checkbox'></input>
                    <span>산책하기</span>
                    <FaTrash />
                </div>
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

