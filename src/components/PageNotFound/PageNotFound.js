import React from 'react';

const PageNotFound = (props) => (
    <div>
        <h1>Page not found 404 error</h1>
        <p>
            Oops!
        </p>
        <button onClick={() => props.history.push('/')}>Home</button>
    </div>
);

export default PageNotFound;