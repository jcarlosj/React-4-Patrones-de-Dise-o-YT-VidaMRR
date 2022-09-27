import { createContext, useContext, useState } from 'react';

import { newTodos } from '../../../data/data';


// 1. Definicion de contexto
const AppContext = createContext({
    items: [],
    onComplete: ( id ) => {},
});

// 2.Implementación
// Functional Component: Provider Component
export default function Store({ children }) {
    const [ items, setItems ] = useState( newTodos );

    function onComplete( id ) {
        const index = items.findIndex( ( item ) => item.id === id );

        items[ index ].completed = ! items[ index ].completed;
        setItems([ ...items ]);
    }

    return (
        <AppContext.Provider
            value={{
                items,
                onComplete,
            }}
        >
            { children }
        </AppContext.Provider>
    );
}

// 3. Función para acceder al contexto
export function useAppContext() {
    return useContext( AppContext );
}