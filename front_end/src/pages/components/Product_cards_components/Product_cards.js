import React, { useEffect, useState } from 'react';
import Products_card_row from './products_card_row';
import Select_part_butten from './select_part_butten';
import Custom_axios from '../custom_axios';

import Select_navigation_menu from '../Select_navigation_menu';
import $ from "jquery";


export default function Product_cards_home(props) {
    const [state, setState] = useState({
        data: null
    })

    useEffect(() => {
        async()
        async function async() {
            const res = await Custom_axios({ url: "http://localhost:8000/api/get_home_products", type: "get", ContentType: "multipart/form-data" })
            setState({
                ...state,
                data: res.data
            })
        }
    }, []);


    if (state.data == null) {
        return "Loding..."
    } else {
        return (
            <div className="container text-center" style={{ marginBlock: '80px' }}>
                <Select_navigation_menu name="discount_type" height="70px" state={state} setState={setState} select={"part1"} data={[{ name: "part1", menu_name: "PART1", navigat_data: <Products_card_row data={state.data.part1} /> }, { name: "part2", menu_name: "PART2", navigat_data: <Products_card_row data={state.data.part2} /> }, { name: "part3", menu_name: "PART3", navigat_data: <Products_card_row data={state.data.part3} /> }]} />
            </div>
        )
    }
}



