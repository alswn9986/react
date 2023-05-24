import React, { useState } from 'react';

export default function AppForm() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // 상태는 개별적으로 관리해도 되지만 연관되어 있다면 객체로 관리하는 것이 좋음
    const [form, setForm] = useState({name: '', email: ''});
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    // 모든 UI 변경은 상태 변경을 통해 발생해야 함
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>이름:</label>
            <input
                type='text'
                id='name'
                name='name'
                value={form.name}
                onChange={handleChange}
            />
            <label htmlFor='email'>이메일:</label>
            <input
                type='text'
                id='email'
                name='email'
                value={form.email}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    );
}

