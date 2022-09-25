import ProductList from './Products/ProductList';       // Component
import TodoList from './Todos/TodoList';                // Component
import withSearch from './withSearch';                  // High Order Component

import { products, todos } from '../../data/data';      // Function

const ProductListWithSearch = withSearch( ProductList, products );  // Implementation: High Order Component
const TodoListWithSearch = withSearch( TodoList, todos );           // Implementation: High Order Component

// * Main Functional Component
const HocPattern = () => {
    return (
        <>
            <h2>HOC Pattern</h2>
            <section className="section-products">
                <h3>Products</h3>
                <ProductListWithSearch />
            </section>
            <section className="section-todos">
                <h3>Todos</h3>
                <TodoListWithSearch />
            </section>
        </>
    );
};


export default HocPattern;
