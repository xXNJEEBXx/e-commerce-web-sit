import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Custom_axios from './components/custom_axios';
import Select_navigation_menu from './components/Select_navigation_menu';
import Inline_input from './components/inputs/Inline_input';
import Inline_label from './components/label_preview/Inline_label';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Edit_discount(props) {
    const [state, setState] = useState({
        errors_list: [],
        remove_list: [],
    });
    const history = useNavigate();
    var { name } = useParams();



    useEffect(() => {
        async()
        async function async() {
            const res = await Custom_axios({ url: ["http://localhost:8000/api/product/" + name], type: "get" })
            var discount_value
            var discount_type
            if (res.data.discount) {
                discount_value = res.data.discount.value
                discount_type = res.data.discount.type
            } else {
                discount_value = 0
                discount_type = "fixed"
            }
            setState({
                ...state,
                id: res.data.id,
                name: res.data.name,
                discount_value: discount_value,
                select_discount_type: discount_type,
                price: res.data.price,
                imagePreviewUrl: `data:image/jpeg;base64,${res.data.images_preview[0].base64}`
            })
        }
    }, []);

    const onChange = (e) => {
        if (state.select_discount_type == "fixed") {
            if (e.target.value > state.price || e.target.value < 0) {
                state.errors_list.discount_value = "The value entered must be between 0 and " + state.price + "."
            }
        } else {
            if (e.target.value > 100 || e.target.value < 0) {
                state.errors_list.discount_value = "The value entered must be between 0 and 100."
            }
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append("select_discount_type", state.select_discount_type)
        const res = await Custom_axios({ url: "http://localhost:8000/api/update_product_discount/" + state.id, type: "post", data: formData })
        if (res.data.status === 200) {
            history("/Products_edit_select")
            swal({
                title: "Success!",
                text: res.data.message,
                icon: "success",
                button: "OK!"
            })
        }
        else {
            setState({
                ...state,
                errors_list: res.data.validate_err
            })
        }
    };





    function Price_after_discount() {
        if (state.select_discount_type == "fixed") {
            return state.price - state.discount_value
        } else {
            return (state.price * ((100 - state.discount_value) / 100)) == 0 ? "0" : state.price * ((100 - state.discount_value) / 100)
        }
    }


    return (
        <div id="page-warapper" style={{ padding: '40px' }} className="flex justify-content-center background-gray3">
            <div style={{ width: '1120px', background: 'white', padding: '40px' }}>
                <h1 style={{ fontSize: '60px' }}>Edit discount</h1>
                {!state.name ? <h1>Loding...</h1> :
                    <form onSubmit={onSubmit}>
                        <div className="text-align-center">
                            <h4 style={{ marginBottom: '40px', fontSize: '40px', marginTop: '30px' }}>
                                <b>{state.name}</b>
                            </h4>
                            <div className="border-gray1px padding10px inline-flex">
                                <img style={{ height: '500px', width: '500px', borderRadius: '4px' }}
                                    src={state.imagePreviewUrl} />
                            </div>
                        </div>
                        <Select_navigation_menu name="discount_type" type="same content" state={state} setState={setState} select={state.select_discount_type} data={[{ name: "fixed", menu_name: "Fixed", }, { name: "percentage", menu_name: "Percentage", }]} content={
                            <div>
                                <Inline_input icon={state.select_discount_type == "percentage" ? <FontAwesomeIcon icon={['fas', 'percent']} style={{ right: '20px', top: "20px", position: "absolute", fontSize: "25px" }} /> : null} onChange={onChange} name="discount_value" width="620px" type="number" text="Discount" state={state} setState={setState} />
                                <Inline_label name="price" text="Product current price" width="600px" state={state} setState={setState} />
                                <Inline_label value={Price_after_discount()} text="Price after discount" width="600px" state={state} setState={setState} />
                            </div>
                        } />
                        < button style={{ height: "60px", fontSize: "25px", marginTop: "25px" }} class="button-blue form-control" > Save</ button>
                    </form >
                }
            </div >
        </div >
    )

}