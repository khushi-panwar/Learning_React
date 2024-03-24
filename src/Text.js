import React ,{memo} from "react";


const Text = memo((props) => {//avoids un-necessary rum of the code when the values of the props are not changing
    console.log(props);
    const {children} = props; 
    return <div>{children}</div>
})

export default Text;