import { createContext, useState } from "react";

// 데이터를 담음
export const DarkModeContext = createContext();
// 데이터를 잘 보여줄 수 있는?
export function DarkModeProvider({ children }) {
    // 글로벌 하게 기억하고 처리해야 하는 것들
    // UI 적으로 무언가를 하지는 않지만 데이터
    // 자식 컴포넌트를 받아오는 컴포넌트 하나를 만들고 자식 컴포넌트와 공유하고 싶은 데이터를 value에 지정
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) => !mode);
    return (
        <DarkModeContext.Provider
            value={{darkMode, toggleDarkMode}}
        >{children}</DarkModeContext.Provider>
    )
}