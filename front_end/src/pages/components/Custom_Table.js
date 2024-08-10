import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function Custom_Table(props) {
    function print_td(product_row, titel) {
        titel = titel.toLowerCase().replace(/ /g, '_');
        return product_row[titel]
    }

    console.log(props.api_data)
    return (
        <table style={{ marginTop: '40px' }}>
            <tr className="child-color-blue">
                {props.titels.map(titel =>
                    <th><h4>{titel}</h4></th>
                )}
            </tr>
            {
                props.api_data.map(product =>
                    <tr >{
                        props.titels.map(titel =>
                            <td>{print_td(product, titel)}</td>
                        )
                    } </tr>
                )
            }
        </table>
    )
}

