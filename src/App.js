import React, {useState } from "react";
import Button from "./Button";
import Text from "./Text";


const App = () => {
    const [data, setData] = useState([// useState = used to change the data 
        {id:'a', text: 'text 1'},
        {id:'b', text: 'text 2'},
        {id:'c', text: 'text 3'},
        {id:'d', text: 'text 4'},
    ])

    const addMoreData = () => {
        console.log("i'm from parent");
        setData((prevData) => [  ...prevData,{id:'e', text: 'text 5'}])
    }

    return <>
        {
        data.map((item) => <Text key={data.id}>{item?.text}</Text>)
        }
        <Button clickAction={addMoreData}>add more data</Button>
    </>
}

//export statement
export default App;