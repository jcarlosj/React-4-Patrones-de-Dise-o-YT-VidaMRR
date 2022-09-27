import Store from './Todos/Store';
import TodosView from './Todos/TodosView';


// * Main Functional Component
const Main = () => {

    return (
        <>
            <h2>Provider Pattern</h2>
            <Store>
                <TodosView />
            </Store>
        </>
    );
};


export default Main;
