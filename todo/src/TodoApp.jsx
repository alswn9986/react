import React, { useState } from 'react';
import './TodoApp.css';
import { FaSun } from "react-icons/fa";
import TodoItem from './components/TodoItem';

export default function TodoApp() {
    const filterList = [{key: 'all', value: 'All'}, {key: 'active', value: 'Active'}, {key: 'completed', value: 'Completed'}];
    const [activeFilter, setActiveFilter] = useState(filterList.find(x => x.key === 'all'));
    const handleFilter = (item) => {
        setActiveFilter(item);
    };

    const getId = () => new Date().getTime() + Math.random();
    const [newItem, setNewItem] = useState('');
    const handleInput = (e) => {
        setNewItem(e.target.value);
    };

    const sample = [{
        id: getId(),
        status: 'active',
        content: '강의보기'
    }, {
        id: getId(),
        status: 'completed',
        content: '카페가기'
    }];
    const [list, setList] = useState(sample);
    const getItemObj = (newItem) => ({
        id: getId(),
        status: 'active',
        content: newItem
    });
    const handleAdd = () => {
        setNewItem('');
        setList([...list, getItemObj(newItem)]);
    };

    const handleDelete = (id) => {
        setList([...list].filter(item => item.id !== id));
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='mode'>
                    <FaSun className='sun' />
                </div>
                <div className='tab'>
                    {
                        filterList.map(item => <a key={item.key} className={activeFilter.key === item.key ? 'filter active' : 'filter'} onClick={(e) => {handleFilter(item)}}>{item.value}</a>)
                    }
                </div>
            </div>
            <div className='main'>
                {
                    list.map(item => {
                        if (activeFilter.key === 'all' || item.status === activeFilter.key) {
                            return (<TodoItem key={item.id} id={item.id} content={item.content} handleDelete={handleDelete} />)
                        }
                    })
                }
            </div>
            <div className='footer'>
                <div className='addWrap'>
                    <input placeholder='Add TODO' onChange={handleInput} value={newItem} />
                    <button onClick={handleAdd}>Add</button>
                </div>
            </div>
        </div>
    );
}
