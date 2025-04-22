import React from 'react';

const Hello = () => {
    return (
        <div className="greeting">
            <h1>Hello, Mainul!</h1>
        </div>
    );
    // return React.createElement(
    //     'div',
    //     { id: 'greeting', className: 'greeting' },
    //     React.createElement('h1', null, 'Hello, Mainul!')
    // );
};

export default Hello;