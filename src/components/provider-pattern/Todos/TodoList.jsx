import Todo from './Todo';

// Functional Component
export default function TodoList({ items }) {

    return (
        <div>
            {   items.map( ( item ) => (
                    <Todo key={ item.id } { ...item } />
            ))}
        </div>
    );
}