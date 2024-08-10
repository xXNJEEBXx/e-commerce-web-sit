import React, { useEffect, useState } from 'react';
import Product_card from './product_card';

export default function products_card_row(props) {
    return (
        <div className="grid ">
            {props.data.map(product =>
                <Product_card discount_type={product.discount ? product.discount.type : null} price={product.price} main_price={product.main_price} image={product.image} name={product.name} />
            )}
        </div>
    )
}