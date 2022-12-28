import React from 'react';


const Response = (props) => {

    return(
        <div>
            { (props.errorCode===1 || props.errorCode===2 ) &&
                <div className={"divErrorCode"}>
                    username or password isn't correct
                </div>
            }
        </div>
    )
}
export default Response;
