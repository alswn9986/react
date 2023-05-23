import React, { useEffect, useState } from 'react';

export default function Products() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // 상대경로를 쓰면 public에 접근 가능
        fetch('data/products.json')
            .then((res) => res.json())
            .then((data) => {
                console.log('데이터를 네트워크에서 받아옴');
                setProducts(data);
            });
        // 컴포넌트가 없어질 때 종료 작업이 필요하다면 콜백 함수 작성
        return () => {
            console.log('깨끗하게 청소하는 일');
        }
    }, []);

    return (
        <>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
            <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
        </>
    );
}

