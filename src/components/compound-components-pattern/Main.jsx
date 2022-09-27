import Menu from './Menu/Menu';


// * Main Functional Component
const CompoundComponentPattern = () => {
    return (
        <>
            <h2>Compound Component Pattern</h2>
            <Menu>
                <Menu.Item title="Elemento 1" />
                <Menu.Item title="Elemento 2" />
                <Menu.Item title="Elemento 3" />
            </Menu>
        </>
    );
}


export default CompoundComponentPattern;
