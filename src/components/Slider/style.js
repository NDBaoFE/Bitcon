import styled from "styled-components";
import Slider from "react-slick";
export const Slide = styled.div`
    min-height: 250px;
    color: #fff;
    background: -webkit-radial-gradient(
        0% 0%,
        103.03% 103.03%,
        #d080ff 0%,
        #6c5dd3 100%
    );
    background: -o-radial-gradient(
        0% 0%,
        103.03% 103.03%,
        #d080ff 0%,
        #6c5dd3 100%
    );
    background: radial-gradient(
        103.03% 103.03% at 0% 0%,
        #d080ff 0%,
        #6c5dd3 100%
    );
    position: relative;
    padding: 32px 32px 64px;
    border-radius: 24px;
    overflow: hidden;
`;
export const SliderDate = styled.div`
    margin-bottom: 5px;
    font-size: 10px;
    font-weight: 700;
    line-height: 1.6;
    letter-spacing: 0.9px;
    text-transform: uppercase;
`;
export const SliderTitle = styled.div`
    margin-bottom: 20px;
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    line-height: 1.25;
    letter-spacing: -0.5px;
    font-weight: 500;
`;
export const SliderInfo = styled.div`
    margin-bottom: 24px;
`;
export const SliderButton = styled.button`
    background: #242731;
    color: #ffffff;
    min-width: 114px;
    height: 48px;
    padding: 0 24px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
    border: none;
    cursor: pointer;
`;
export const SliderImg = styled.img`
    display: block;
    width: 100%;
`;
export const SliderWrapper = styled.div`
    max-width: 260px;
`;
export const SliderPreview = styled.div`
    position: absolute;
    width: 740px;
    top: 0;
    left: 140px;
`;
export const StyledSlider = styled(Slider)`
    .slick-dots {
        bottom: 10%;
        left: -37.5%;
    }
    .slick-dots li button:before {
        content: none;
    }
    .slick-dots li button {
        background: rgba(255, 255, 255, 0.5);
        -webkit-transition: all 0.2s;
        width: 24px;
        height: 2px;
        border-radius: 20px;
        padding: 0;
    }
    .slick-dots li.slick-active button {
        background: white;
    }
`;
