import Todo from './Todo';
import { filterItems } from '../helpers/filter.helper';

// Functional Component
export default function TodoList({ query, dataset }) {
    const items = filterItems( query, dataset );

    return (
        <ul>
            {   items.map( ( product ) => (
                    <Todo
                        key={ product.id }
                        title={ product.title }
                        completed={ product.completed }
                    />
            ))}
        </ul>
    );
}