import { useState, useEffect, useMemo } from 'react';
import TodoList from './TodoList';

import { newTodos } from '../../../data/data';  


// Funcional Component: Container Component
export default function TodoContainer() {
    const [ items, setItems ] = useState( [] );

    useEffect( () => {
        setItems( newTodos );   // Obtener y asignar datos
    }, [] );

    /**
     * Cambia el estado de completed
     * @param {number} id
     */
    function handleComplete( id ) {
        const index = items.findIndex( ( item ) => item.id === id );

        items[ index ].completed = ! items[ index ].completed;
        setItems([ ...items ]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const itemsCompleted = useMemo( () => {

        return items.filter( ( item ) => item.completed ).length;
    });

    return (
        <TodoList
            items={ items }
            onComplete={ handleComplete }
            itemsCompleted={ itemsCompleted }
            totalItems={ items.length }
        />
    );
}