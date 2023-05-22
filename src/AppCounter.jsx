import React, { useState } from 'react';
import Counter from './components/Counter';

export default function AppCounter() {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount((prev) => prev + 1);
    return (
        <div>
            <div className='banner'>
                Total Count: {count} {count > 10 ? '🔥' : '🧊'}
            </div>
            <Counter
                totalCount={count}
                onClick={handleClick}
            />
            <Counter
                totalCount={count}
                onClick={handleClick}
            />
        </div>
    );
}