import React, { useEffect, useState, Component } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Custom_axios from './components/custom_axios';
import Product_swiper from './components/Product_swiper';
import Counter_by_arrow from './components/Counter_by_arrow';



export default function Product(props) {
    const [state, setState] = useState({
        errors_list: [],
        images_preview: [],
        loding: true
    });
    var { name } = useParams();

    useEffect(() => {
        async()
        async function async() {
            const res = await Custom_axios({ url: ["http://localhost:8000/api/product/" + name], type: "get" })
            setState({
                ...state,
                id: res.data.id,
                name: res.data.name,
                price: res.data.price,
                type: res.data.type,
                description: res.data.description,
                delivery_possibility: res.data.delivery_possibility,
                quantity: res.data.quantity,
                product_length: res.data.length,
                product_height: res.data.height,
                product_width: res.data.width,
                images_preview: res.data.images_preview,
                discount: res.data.discount,
                loding: false
            })
        }
    }, []);


    function price() {
        return (
            <div>
                <div style={{ marginTop: "10px" }} className="inline-flex">
                    <h1 style={{ color: "red" }}>{state.price}</h1>
                    <h3 style={{ marginLeft: "5px", fontSize: "23px" }} className="text-decoration-line-through">
                        {state.discount ? state.discount.price_before_discount : ""}
                    </h3>
                </div>
                {state.discount ? <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", background: "#e4faef", width: "100%", borderLeft: "5px solid #13ce66", borderRadius: "8px", padding: "5px" }}
                    className="discunt-background" >
                    {state.discount.type == "percentage" ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <i className="fas fa-tag fa-rotate-90"
                            style={{ color: "#13ce66", marginLeft: "10px", fontSize: "40px" }} />
                        <div style={{ fontSize: "30px", width: "100px", textAlign: "center", background: "#13ce66", color: "white", borderRadius: "15px", marginLeft: "10px", padding: "4px", height: "45px" }}>
                            <h3>{state.discount.value}%</h3>
                        </div>
                    </div> : ""}
                    <div className="inline-flex">
                        <h4 style={{ marginLeft: "10px", fontSize: "30px" }}>Save: SAR{state.discount.save}</h4>
                    </div>
                </div> : ""}
            </div>
        )
    }


    if (state.loding) {
        return (
            <h1>Loding</h1>
        )
    } else {
        return (
            <div style={{ padding: "40px", display: "flex" }}>
                <div>
                    <div style={{ padding: "40px" }} class="inline-flex justify-content-center">
                        <Product_swiper images_preview={state.images_preview} />
                    </div>
                    <div style={{ marginTop: 40 }}>
                        <div className="inline-flex">
                            <div>
                                <i className="fas fa-star color-gray"></i>
                                <i className="fas fa-star color-gray"></i>
                                <i className="fas fa-star color-gray"></i>
                                <i className="fas fa-star color-gray"></i>
                                <i className="fas fa-star color-gray"></i>
                            </div>
                            <h4 style={{ marginLeft: 15 }}>0 reviews</h4>
                            <h4 style={{ marginInline: 15 }}>|</h4>
                            <h4>Write a review</h4>
                        </div>
                        <div style={{ marginTop: 10, display: "flex" }} >
                            <h4 style={{ marginRight: 8 }}>Dimensions:</h4>
                            <h4>{state.product_width}</h4>
                            <h4 style={{ marginInline: 4 }}>x</h4>
                            <h4>{state.product_height}</h4>
                            <h4 style={{ marginInline: 4 }} className='inline'>x</h4>
                            <h4>{state.product_length}</h4>
                            <h4 style={{ marginInline: 4 }} className='inline'>cm</h4>
                        </div>
                        <div style={{ marginTop: 20, width: 400 }} className="inline-flex">
                            <h4>Description:</h4>
                            <h4 style={{ marginLeft: 5 }}>{state.description}</h4>
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: "80px", width: "500px" }}>
                    <div>
                        <h1>{state.name}</h1>
                        {price()}
                        <div>
                            <h4 style={{ fontSize: "25px" }} className="font-size25px">Message / Card</h4>
                            <textarea style={{ padding: "5px", width: "100%", height: "300px", fontSize: "20px" }}
                                placeholder="Message..." />
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: '50px' }}>
                    <form>
                        <div className="inline-flex justify-content-center">
                            <Counter_by_arrow state={state} setState={setState} max={state.quantity} />
                            <button
                                style={{
                                    borderBottomLeftRadius: '0px',
                                    borderTopLeftRadius: '0px',
                                    width: '300px',
                                    fontSize: '25px',
                                    height: '50px',
                                    borderRadius: '4px'
                                }}
                                className="flex justify-content-center align-items-center button-blue"
                            >
                                <i className="fas fa-cart-plus"></i>
                                <h4 style={{ marginLeft: '50px' }}>Add to cart</h4>
                            </button>
                        </div>
                    </form>
                    <div style={{ marginTop: '15px' }} className="info-alert">
                        <i style={{ margin: '0 auto', color: '#bd9132' }} className="fas fa-info-circle"></i>
                        <p style={{ width: '100%', marginTop: '10px' }}>
                            This product cannot be shipped outside
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}

