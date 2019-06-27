import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ExampleApp';

export const UserContext = React.createContext();

const username = { name: 'Shubham', surname: 'Deodia' };

ReactDOM.render(
    <UserContext.Provider value={username}>
        <App />
    </UserContext.Provider>,
    document.getElementById('root')
);
