// src/CommonTable.js
import React from 'react';

const CommonTable = ({ data, columns }) => {
    if (!data || !columns) {
        return null;
    }

    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.accessor}>{column.Header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map((column) => (
                            <td key={column.accessor}>{row[column.accessor]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CommonTable;
