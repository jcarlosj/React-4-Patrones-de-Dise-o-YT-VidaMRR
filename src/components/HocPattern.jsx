import ProductList from './hoc-pattern/Products/ProductList';       // Component
import withSearch from './hoc-pattern/withSearch';                  // High Order Component

import { products } from '../data/data';                            // Function

const ProductListWithSearch = withSearch( ProductList, products );  // Implementation: High Order Component

// * Main Functional Component
const HocPattern = () => {
    return (
        <>
            <h2>HOC Pattern</h2>
            <section className="section-products">
                <h3>Products</h3>
                <ProductListWithSearch />
            </section>
        </>
    );
};


export default HocPattern;
