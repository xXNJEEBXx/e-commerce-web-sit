import React, { useEffect, useState } from 'react';
export default function select_part_butten(props) {
    var classes
    if (props.ClassesType == "active") {
        classes = "tap-white tab-active"
    } else {
        classes = "tap-white remove-space-between-inline "
    }
    return (
        <button id={"part" + props.id} onClick={props.onClick} style={{ width: '230px' }} className={classes}>{props.name}</button>
    )
}
