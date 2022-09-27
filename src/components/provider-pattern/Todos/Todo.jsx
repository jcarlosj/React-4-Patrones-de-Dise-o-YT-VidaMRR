import { useAppContext } from './Store';


// Functional Component
export default function Todo({ id, title, completed }) {
    const store = useAppContext();

    return (
        <>
            <div>
                <input
                    type="checkbox"
                    checked={ completed }
                    value={ completed }
                    onChange={ (e) => store.onComplete( id ) }
                />
                { title }
            </div>
        </>
    );
}