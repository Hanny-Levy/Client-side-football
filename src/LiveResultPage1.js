import React from 'react';

const LiveResultPage1 = (props) => {

    return (
        <div >

            <table border={1}>                <tr>
                    <td >
                        position
                    </td>




                    <tr>
                    <th>
                        team1
                    </th>
                    </tr>

                    <tr>
                        <td>{props.team1.name}</td>
                    </tr>


                    <td>
                        team2
                    </td>
                </tr>
            </table>


        </div>
    );
};

export default LiveResultPage1;