import React, { useContext, useState } from 'react';
import './TodoApp.css';
// import { FaSun } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import TodoItem from './components/TodoItem';
import { DarkModeContext } from './context/DarkModeContext';
import {v4 as uuidv4} from 'uuid';

export default function TodoApp() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    const filterList = [{key: 'all', value: 'All'}, {key: 'a', value: 'Active'}, {key: 'c', value: 'Completed'}];
    const [activeFilter, setActiveFilter] = useState(filterList.find(x => x.key === 'all'));
    const handleFilter = (item) => {
        setActiveFilter(item);
    };

    const [newItem, setNewItem] = useState('');
    const handleInput = (e) => {
        setNewItem(e.target.value);
    };

    const sample = [{
        id: uuidv4(),
        status: 'a',
        content: '강의보기'
    }, {
        id: uuidv4(),
        status: 'c',
        content: '카페가기'
    }];
    const [list, setList] = useState(sample);
    const getItemObj = (newItem) => ({
        id: uuidv4(),
        status: 'a',
        content: newItem
    });
    const handleAdd = () => {
        if (newItem.trim().length > 0) {
            setNewItem('');
            setList([...list, getItemObj(newItem)]);
        }
    };

    const handleDelete = (id) => {
        setList([...list].filter(item => item.id !== id));
    };

    const handleChangeCheck = (updatedItem) => {
        // const idx = list.findIndex(x => x.id === updatedItem.id);
        // const temp = [...list];
        // temp[idx] = updatedItem;
        // setList(temp);
        setList(list.map((t) => t.id === updatedItem.id ? updatedItem : t));
    };

    return (
        <div className={darkMode ? 'container' : 'container light'}>
            <div className='header'>
                <div className='mode'>
                    <FiSun className='sun' onClick={() => toggleDarkMode()} />
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
                            return (<TodoItem key={item.id} item={item} handleDelete={handleDelete} handleChangeCheck={handleChangeCheck} />)
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
