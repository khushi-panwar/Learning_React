import React from "react";
import Button from "./Button";

const handleClickAction = () => {
    console.log("i'm from parent");
}
const App = () => {
    return <Button clickAction={handleClickAction}>Click me</Button>;
}

//export statement
export default App;