import React from "react";

import {
    Slide,
    SliderButton,
    SliderDate,
    SliderInfo,
    SliderTitle,
    SliderWrapper,
    SliderPreview,
    SliderImg,
    StyledSlider,
} from "./style";
import { data } from "./data";
export default function HomeSlide() {
    var settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
    };
    return (
        <StyledSlider {...settings}>
            {data.map((item, index) => {
                return (
                    <Slide key={index}>
                        <SliderWrapper>
                            <SliderDate>{item.date}</SliderDate>
                            <SliderTitle>{item.title}</SliderTitle>
                            <SliderInfo>{item.info}</SliderInfo>
                            <SliderButton>{item.btn_value}</SliderButton>
                        </SliderWrapper>
                        <SliderPreview>
                            <SliderImg src={item.img} />
                        </SliderPreview>
                    </Slide>
                );
            })}
        </StyledSlider>
    );
}
