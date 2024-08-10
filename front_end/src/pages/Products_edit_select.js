import React, { Component, useState, useEffect, } from 'react';
import Custom_axios from './components/custom_axios';
import Custom_Table from './components/Custom_Table';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';

export default function Products_edit_select(props) {
    const [state, setState] = useState({
        data: []
    });
    useEffect(() => {
        async()
        async function async() {
            const res = await Custom_axios({ url: "http://localhost:8000/api/get_products_list", type: "get", ContentType: "multipart/form-data" })
            res.data.forEach(element => {
                state.data.push({
                    id: <h4>{element.id}</h4>,
                    name: <h4>{element.name}</h4>,
                    image: <img style={{ width: "100px", height: "100px" }} src={`data:image/jpeg;base64,${element.image}`} />,
                    price_before_discount: <h4>{"SAR " + element.price_before_discount}</h4>,
                    price_after_discount: <h4>{(element.price_after_discount ? "SAR " + element.price_after_discount : "No discount")}</h4>,
                    type: <h4>{element.type}</h4>,
                    select:
                        <div className='flex justify-content-center align-items-center'>
                            <Link to={"/product_edit/" + element.name.replace(/ /g, "_")} ><button style={{ fontSize: '20px', width: '100px', height: '30px' }} className='button-blue'>Select</button></Link>
                            <Link to={"/product_edit_discount/" + element.name.replace(/ /g, "_")} ><button style={{ fontSize: '20px', marginLeft: '10px', width: '150px', height: '30px' }} className='button-blue'>Edit discount</button></Link>
                        </div>,
                })
            });
            setState({
                ...state,
            })
        }
    }, []);


    return (
        <div style={{ padding: '40px' }} className="flex justify-content-center align-items-center background-gray3 padding40px">
            <div style={{ minHeight: '600px', padding: '40px', minWidth: '100%', background: 'white' }} className="background-white">
                <h1>Select product to edit or add <Link to="/Add_new_product"><button style={{ fontSize: '30px', width: '100px' }} className='button-blue'>new</button></Link></h1>
                {
                    state.data != "" ? <Custom_Table titels={["ID", "IMAGE", "NAME", "PRICE BEFORE DISCOUNT", "PRICE AFTER DISCOUNT", "TYPE", "SELECT"]} api_data={state.data} /> :
                        "sory thare is no data"
                }
            </div>
        </div >
    )
}
















