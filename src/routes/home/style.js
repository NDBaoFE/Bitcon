import styled from "styled-components";
import { themes } from "../../utils/theme/theme";
export const Container = styled.div``;
export const Wrapper = styled.div`
    flex-grow: 1;
    margin-left: auto;
    margin-right: 350px;
    min-height: 100vh;
`;
export const ActionWrapper = styled.div`
    width: 350px;
    min-height: 100vh;
    background: ${themes.colors.background};
    display: flex;
    position: fixed;
    right: 0;
    top: 0;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(228, 228, 228, 0.1);
`;
export const Slider = styled.div`
    max-width: 800px;
    margin: 50px auto;
`;
export const Card = styled.div`
    background: #242731;
    margin-bottom: 20px;
    margin-top: 50px;
    width: 270px;
    text-align: center;
    border-radius: 10px;
    ::before {
        content: "";
        position: absolute;
        transform: translate(-50%, 15%);
        z-index: -1;
        border-radius: 24px;
        background: rgba(36, 39, 49, 0.7);
        height: 350px;
        width: 270px;
    }
`;
export const Hero = styled.h5`
    font-size: 18px;
    line-height: 1.33333;
    font-weight: 500;
    margin-bottom: 16px;
    color: white;
`;
export const Balance = styled.h1`
    font-size: 32px;
    line-height: 1.25;
    letter-spacing: -0.5px;
    margin-bottom: 16px;
    color: white;
    display: flex;
    justify-content: center;
`;
export const ProfitWrapper = styled.div`
    background: #242731;
    margin-bottom: 98px;
    margin-top: 50px;
    width: 270px;
    text-align: center;
    border-radius: 10px;
    ::before {
        content: "";
        position: absolute;
        transform: translate(-50%, 10%);
        z-index: -1;
        border-radius: 24px;
        height: 100px;
        background: rgba(36, 39, 49, 0.7);
        width: 270px;
    }
`;
