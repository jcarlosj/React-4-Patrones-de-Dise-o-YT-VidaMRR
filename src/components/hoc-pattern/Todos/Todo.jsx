// Functional Component
export default function Todo({ title, completed }) {

    function handleChange() {
        //...
    }

    return (
        <li>
            <input type="checkbox" checked={ completed } onChange={ handleChange } />
            { title }
        </li>
    );
}