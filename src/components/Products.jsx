import React, { useEffect, useState } from 'react';

export default function Products() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked((prev) => !prev);

    useEffect(() => {
        // 상대경로를 쓰면 public에 접근 가능
        fetch(`data/${checked ? 'sale_' : ''}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('fetch success');
                setProducts(data);
            });
        // 컴포넌트가 없어질 때 종료 작업이 필요하다면 콜백 함수 작성
        return () => {
            console.log('unmounted');
        }
    }, [checked]);

    return (
        <>
            <input
                id="checkbox"
                type="checkbox"
                value={checked}
                onChange={handleChange}
            />
            <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
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

