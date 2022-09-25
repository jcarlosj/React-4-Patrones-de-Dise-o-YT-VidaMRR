import { useState } from 'react';

/** HOC: High Order Component */
export default function withSearch( Component, dataset ) {

    return function () {
        const [ query, setQuery ] = useState( '' );

        function handleChange( e ) {
            setQuery( e.target.value );
        }

        return (
            <div>
                <input onChange={ handleChange } value={ query } />
                <Component query={ query } dataset={ dataset } />
            </div>
        );
    };
}