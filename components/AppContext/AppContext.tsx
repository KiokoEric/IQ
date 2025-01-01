import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AppContextProps {
    Type: any;
    setType: (Type: any) => void;
    Category: any;
    setCategory: (Category: any) => void;
    Difficulty: any;
    setDifficulty: (Difficulty: any) => void;
}

const AppContext = createContext<AppContextProps| undefined>(undefined);


export const useAppContext = () => {
    const context = useContext(AppContext)

    if (context === undefined) {
        throw new Error('App context must be within App context provider. ')
    }
    return context
}

export const AppProvider: React.FC<{ children: ReactNode }> = ({children})  => {

    const [Type, setType] = useState<any>('')
    const [Category, setCategory] = useState<any>('')
    const [Difficulty, setDifficulty] = useState<any>('')

    return (
        <AppContext.Provider value={{ Category, setCategory,  Difficulty, setDifficulty, Type, setType }}>
            {children}
        </AppContext.Provider>
    );
};