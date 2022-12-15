import React from 'react';

const Table = (props) => {
    return (
        <table>
            <thead>
            <tr>
                {props.headers.map((header) => (
                    <th key={header}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {props.data.map((row) => (
                <tr key={row.id}>
                    {props.headers.map((header) => (
                        <td key={`${row.id}-${header}`}>{row[header]}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
