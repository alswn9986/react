import React from 'react';
import TodoApp from './TodoApp';
import { DarkModeProvider } from './context/DarkModeContext';

export default function AppTheme() {
    return (
        <DarkModeProvider>
            <TodoApp />
        </DarkModeProvider>
    );
}
