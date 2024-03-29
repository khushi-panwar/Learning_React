import React, { useState } from "react";
import Button from "./Button";
import Text from "./Text";


const App = () => {

    const [message, updateMessage] = useState(' hello user, good morning');//state variable
    // let message = ' hello user, good morning';//normal variable  

    const changeMessage = () => {
        console.log('before update', message);
        updateMessage((preData) => {//it is a asynchronous task only, also if we have multiple in single time , it batches the task (performs the batch operation) and execute them simultaneously
            console.log("previous Data", preData);

            return 'hello user, good afternoon'
        });
        console.log('after update', message);
    }

    // console.log(updateMessage);//it is a dispatchSetState function , just to check

    // only div part will get updated and rest will remain un-touched because of reconsigration algorithms and  react fiber playing behind the scene ! 
    return <>
        <div>{message}</div> 
        <button onClick={changeMessage}>Change message</button>
    </>
}

//export statement
export default App;