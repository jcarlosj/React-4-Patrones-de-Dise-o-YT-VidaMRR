import Product from './Product';
import { filterItems } from '../helpers/filter.helper';

// Functional Component
export default function ProductList({ query, dataset }) {
    const items = filterItems( query, dataset );

    return (
        <ul>
            {  items.map( ( product ) => (
                <Product key={ product.id } title={ product.title } />
            ))}
        </ul>
    );
}