import React from 'react';


const Response = (props) => {

    return(
        <div>
            { (props.errorCode===1) ?
                <div className={"divErrorCode"}>
                    error code {props.errorCode}: username isn't correct
                </div>
                :
                <div className={"divErrorCode"}>
                   error code {props.errorCode}: password isn't correct
                </div>

            }
        </div>


    )


}
export default Response;
