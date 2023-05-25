import React, { useCallback, useMemo } from 'react';
import { useReducer } from 'react';
import personReducer from './reducer/person-reducer';
import { memo } from 'react';

export default function AppMontorsButton() {
    const [person, dispatch] = useReducer(personReducer, initialPerson);
    // 성능개선 : useCallback()
    // const handleUpdate = () => {
    //     const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    //     const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    //     dispatch({ type: 'updated', prev, current });
    // };
    // dependency 가 없으면 딱 한 번만 useCallback 실행
    const handleUpdate = useCallback(() => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        dispatch({ type: 'updated', prev, current });
    });
    // const handleAdd = () => {
    //     const name = prompt(`멘토의 이름은?`);
    //     const title = prompt(`멘토의 직함은?`);
    //     dispatch({ type: 'added', name, title });
    // };
    const handleAdd = useCallback(() => {
        const name = prompt(`멘토의 이름은?`);
        const title = prompt(`멘토의 직함은?`);
        dispatch({ type: 'added', name, title });
    });
    // const handleDelete = () => {
    //     const name = prompt(`누구를 삭제하고 싶은가요?`);
    //     dispatch({ type: 'deleted', name });
    // };
    const handleDelete = useCallback(() => {
        const name = prompt(`누구를 삭제하고 싶은가요?`);
        dispatch({ type: 'deleted', name });
    });

    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는:
            </p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    // 배열의 index를 key로 쓰는 것은 추천하는 방식이 아님
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <Button text='멘토 이름 바꾸기' onClick={handleUpdate} />
            <Button text='멘토 추가하기' onClick={handleAdd} />
            <Button text='삭제하기' onClick={handleDelete} />
        </div>
    );
}

// 성능개선 : memo 함수에도 적용
// function Button({ text, onClick }) {
const Button = memo(({ text, onClick }) => {
    console.log('Button', text, 're-rendering 😝');
    // 성능개선 : useMemo()
    // 컴포넌트 안에서 무거운 일을 하는데, 매번 할게 아니라 처음에만 한다면 useEffect()나 useMemo()를 사용함
    // dependency 가 없으면 최초 한 번만, dependency 가 있으면 그 값이 변경될 때마다
    // const result = calculateSomething();
    const result = useMemo(() => calculateSomething(), []);
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '20px',
                margin: '0.4rem'
            }}
        >{`${text} ${result}`}</button>
    );
});

function calculateSomething() {
    for (let i = 0; i < 10000; i++) {
        console.log('🙃');
    }
    return 10;
}

const initialPerson = {
    name: '엘리',
    title: '개발자',
    mentors: [
        {
            name: '밥',
            title: '시니어개발자'
        },
        {
            name: '제임스',
            title: '주니어개발자'
        },
        {
            name: '안나',
            title: '프론트개발자'
        },
    ]
};