// const root = document.getElementById('root');// found element 
// const p = document.createElement('p');//created element 
// p.innerText = "Hello From Khushi";

// root.appendChild(p);// then appended element to root 



/** in React */
const div = React.createElement('div', {className: 'text'} ,'hello from Khushi, i am inside react now.' );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);