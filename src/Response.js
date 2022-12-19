import React from 'react';


const Response = (props) => {

    return(
        <div>
            { (props.errorCode===1) ?
                <div className={"divErrorCode"}>
                     your username isn't correct
                </div>
                :
                <div className={"divErrorCode"}>
                    {props.errorCode}: your password isn't correct
                </div>

            }
        </div>


    )


}
export default Response;
