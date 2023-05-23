import React, { useState } from 'react';

export default function Counter({totalCount, onClick}) {
    // set*() 함수가 호출될 때마다 리액트가 자동으로 Counter() 함수 다시 호출
    // useState() 훅은 해당 컴포넌트 내에서 다시 호출이 되어도 값을 기억하고 있음
    const [count, setCount] = useState(0);
    return (
        <div className='counter'>
            <p className='number'>
                {count} <span className='total'>/ {totalCount}</span>
            </p>
            <button
                className='button'
                onClick={() => {
                    setCount((prev) => prev + 1);   // setCount 훅의 마지막 값 prev
                    onClick();
                }}
            >Add +</button>
        </div>
    );
}