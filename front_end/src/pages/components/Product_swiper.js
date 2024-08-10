import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
// swiper
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


export default function Product_swiper(props) {
    var [state, setState] = useState(null);

    function print_swiper(image) {
        if (props.images_preview[0] == image) {
            return (
                <SwiperSlide className='swiper-slide-thumb-active'>
                    <img
                        style={{ width: "85px", height: "85px" }} className="hover-border-blue"
                        src={`data:image/jpeg;base64,${image.base64}`}
                    />
                </SwiperSlide>
            )
        }
        return (
            <SwiperSlide>
                <img
                    style={{ width: "85px", height: "85px" }} className="hover-border-blue"
                    src={`data:image/jpeg;base64,${image.base64}`}
                />
            </SwiperSlide>
        )
    }



    return (
        <div style={{ width: "600px", border: "1px solid gray" }}>
            <div style={{ padding: "10px" }}>
                <div>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: state }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {props.images_preview.map(image =>
                            <SwiperSlide>
                                <img
                                    style={{ height: "700px", width: "578px", marginRight: "10px" }}
                                    src={`data:image/jpeg;base64,${image.base64}`}
                                />
                            </SwiperSlide>
                        )
                        }
                    </Swiper>
                </div>
            </div>
            <div style={{ padding: "10px" }} >
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    onSwiper={setState}
                    spaceBetween={10}
                    slidesPerView={6}
                    navigation={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {props.images_preview.map(image =>
                        print_swiper(image)
                    )}
                </Swiper>
            </div>
        </div>
    )
}