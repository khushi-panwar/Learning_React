import React from 'react'
import ReactDOM from "react-dom/client"


/** in React */
const morning = 'true';
const isMorning = "good morning";
const isAfternoon = "good afternonn";

const morningElement = <div>{isMorning}, its 8am.</div>
const afternoonElement = <div>{isAfternoon}, its 6pm.</div>
const greetingElement = morning ? morningElement : afternoonElement; //using ternary operator

// const div = <div>{greetingElement}</div>  //JSX is just a syntax extension for JavaScript and it will be converted into regular

/**let's dive into functional components :- 
 * regular functions that returns react element 
*/

const GreetComponent = function () {
    // as per defination let's return element
    // return greetingElement + 'i am a component'; //if we perform this then it will convert to string object & show [object Object] i.e string representation of object, so to display here.

    /** <> these are fragments , kind of empty tags that take no space in the DOM , help to wrap element into component*/
    return <> 
    {greetingElement} 
    , i am a component
    </>
}

console.log(GreetComponent);//so, this div is actually behaves as object and it is a react element 

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(GreetComponent()); 
root.render(<GreetComponent/>);// it expects a react element object + it takes tag as an argument and react element object 