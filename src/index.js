import React from 'react'
import ReactDOM from "react-dom"


/** in React */
const div = React.createElement('div', {className: 'text'} ,'hello from Khushi, i am inside react now.' );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);