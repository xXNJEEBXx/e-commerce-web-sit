import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



export default function product_card(props) {
    function price_printer() {
        return (
            <div>
                <div className="flex-center" style={{ fontSize: "40px", color: 'blue' }}>
                    <span>{"SAR " + props.main_price}</span>
                </div>
                <div className="color-gray flex-center text-decoration-line-through   " style={{ fontSize: '13px' }}>
                    <span style={{ fontSize: "30px", height: "40px" }}>{props.discount_type ? ("SAR " + props.price) : null}</span>
                </div>
            </div>
        )
    }

    return (
        <div style={{ margin: '20px' }}>
            <div style={{ display: 'inline-block', textAlign: 'center', cursor: "pointer" }} className="product-card media-product-card box-shadow ">
                <Link to={"product/" + props.name.replace(/ /g, "_")}>
                    <img style={{ width: '360px', height: '360px' }} src={`data:image/jpeg;base64,${props.image}`} className="media-product-photo" />
                    <div style={{ padding: "10px" }}>
                        <span style={{ marginInline: 'auto', marginTop: '10px', width: '200px', color: 'white', transition: '0.3s', borderBottom: '1px solid rgb(125, 125, 255)', fontSize: "40px", paddingInline: "15px" }} className="buy-now-blue color-white ">
                            BUY NOW
                        </span><br />
                        <span style={{ color: 'gray', fontSize: "40px" }} >{props.name}</span>
                        {price_printer()}
                    </div>
                </Link >
            </div>
        </div >
    )
}