import TodoList from './TodoList';

import { useAppContext } from './Store';

// Functional Component
export default function TodosView() {
    const store = useAppContext();

    return <TodoList items={ store.items } />;
}