import { createContext, useState } from "react";

export const DarkModeContext = createContext();
export function DarkModeProvider({children}) {  // 어느 부분에 적용할지 우산을 만드는 것
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) => !mode);
    // children 한테 {darkMode, toggleDarkMode} 제공
    return <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>{children}</DarkModeContext.Provider>;
}