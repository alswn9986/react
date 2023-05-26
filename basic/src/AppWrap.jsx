import React from 'react';

export default function AppWrap() {
    return (
        <div>
            <Navbar>
                <Avartar
                    image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
                    name='James Kim'
                    size={200}
                />
                <p>안녕하세요!</p>
            </Navbar>
            <Navbar>
                <p>안녕히계세요!</p>
            </Navbar>
        </div>
    );
}

// 재사용
function Navbar({ children }) {
    return (
        <header style={{ backgroundColor: 'yellow' }}>
            {children}
        </header>
    );
}

function Avartar({ image, name, size }) {
    return (
        <div>
            <img
                src={image}
                alt={`${name}`}
                width={size}
                height={size}
                style={{ borderRadius: '50%' }}
            />
        </div>
    )
}