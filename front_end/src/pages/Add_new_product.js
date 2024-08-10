import React, { Component, useState } from 'react';
import Long_input from './components/inputs/Long_input';
import Three_inputs_inlin from './components/inputs/Three_inputs_inline';
import Custom_photos_upload from './components/custom_photos_upload';
import Custom_axios from './components/custom_axios';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';

export default function Add_new_product(props) {
    const [state, setState] = useState({
        errors_list: []
    });

    const history = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        if (state.images && state.images.length > 0) {
            for (let i = 0; i < state.images.length; i++) {
                formData.append('images[]', state.images[i]);
            }
        }

        const res = await Custom_axios({ url: "http://localhost:8000/api/add_new_product", type: "post", data: formData, ContentType: 'multipart/form-data' })
        console.log(res)
        if (res.data.status === 200) {
            history("/")
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                button: "OK!"
            })
        } else {
            setState({
                ...state,
                errors_list: res.data.validate_err
            })
        }
        console.log(formData)
    };

    return (
        <div id="page-warapper" style={{ padding: '40px' }} className="width100 flex justify-content-center background-gray3">
            <div style={{ width: '1120px', background: 'white', padding: '40px' }}>
                <h1 style={{ fontSize: '60px' }}>Add new product</h1>
                <form onSubmit={onSubmit}>
                    <Long_input name="name" text="Product name" state={state} setState={setState} />
                    <Long_input name="price" text="Product price" type="number" state={state} setState={setState} />
                    <Long_input name="type" text="Product type" options={["TYPE1", "TYPE2", "TYPE3"]} type="select" state={state} setState={setState} />
                    <Long_input name="description" text="Product description" state={state} setState={setState} />
                    <Long_input name="delivery_possibility" text="Delivery possibility" options={["Al Ahsa", "Saudi Arabia"]} type="select" state={state} setState={setState} />
                    <Long_input name="quantity" text="Product quantity" type="number" state={state} setState={setState} />
                    <Three_inputs_inlin after={<label style={{ fontSize: "30px" }}>cm</label>} title={"Product dimensions"} input1={{ name: "product_length", text: "Length", type: "number" }} input2={{ name: "product_height", text: "Height", type: "number" }} input3={{ name: "product_width", text: "Width", type: "number" }} state={state} setState={setState} />
                    <Custom_photos_upload name={"images"} title={"Product images"} state={state} setState={setState} />
                    <button style={{ height: "60px", fontSize: "25px", marginTop: "25px" }} class="button-blue form-control">Add Product</button>
                </form>
            </div>

        </div>

    )
}





