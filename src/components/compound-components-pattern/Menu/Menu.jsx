import Store, { useAppContext } from './Store';

// Function Component: Compound Component
export default function Menu({ children }) {
    return (
        <Store>
            <MenuContainer>{ children }</MenuContainer>
        </Store>
    );
}

// Functional Component: Container Component
function MenuContainer({ children }) {
    const store = useAppContext();

    return (
        <>
            <div>{ store.showSelected() }</div>
            <ul>{ children }</ul> 
        </>
    );
}

// Function Component: MenuItem Component
function MenuItem({ title }) {
    const store = useAppContext();

    function handleClick( e ) {
        e.preventDefault();
        store.onSelect( title );
    }
    return (
        <li>
            <a href="#here" onClick={ handleClick }>
                { title }
            </a>
        </li>
    );
}


// * Crea la dependencia entre un componente y el otro, es decir: el componente compuesto
Menu.Item = MenuItem;