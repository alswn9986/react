import React, { useReducer, useState } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentors() {
    // 컴포넌트 내부에 객체를 변경하는 로직이 섞여있고, 로직을 다른 컴포넌트에서 재사용할 수 없음
    // const [person, setPerson] = useState(initialPerson);
    // 객체를 새롭게 만들어나갈 로직을 작성한 함수와, 초기값을 전달
    const [person, dispatch] = useReducer(personReducer, initialPerson);
    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        dispatch({ type: 'updated', prev, current });
        // setPerson((person) => ({
        //     ...person,
        //     mentors: person.mentors.map((mentor) => mentor.name === prev ? {...mentor, name: current} : mentor)
        // }));
    };
    const handleAdd = () => {
        const name = prompt(`멘토의 이름은?`);
        const title = prompt(`멘토의 직함은?`);
        dispatch({ type: 'added', name, title });
        // setPerson((person) => ({
        //     ...person,
        //     mentors: [...person.mentors, { name, title }]
        // }));
    };
    const handleDelete = () => {
        const name = prompt(`누구를 삭제하고 싶은가요?`);
        dispatch({ type: 'deleted', name });
        // setPerson((person) => ({
        //     ...person,
        //     mentors: person.mentors.filter((mentor) => mentor.name !== name)
        // }));
    };

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
            <button
                onClick={handleUpdate}
            >멘토 이름 바꾸기</button>
            <button
                onClick={handleAdd}
            >멘토 추가하기</button>
            <button
                onClick={handleDelete}
            >멘토 삭제하기</button>
        </div>
    );
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