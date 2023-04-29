import styled from "styled-components";
import { themes } from "../../utils/theme/theme";

export const InfoContainer = styled.div``;
export const MainWrapper = styled.div`
    flex-grow: 1;
    margin-left: auto;
    margin-right: calc((100% - 350px - 200px) / 2);
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
`;
export const ViewContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
export const HeaderWrapper = styled.div`
    width: 800px;
    height: 200px;
    background: ${themes.colors.background};
    border-radius: 10px;
    font-family: "Nunito Sans", sans-serif;
    color: white;
    margin: 100px auto 0 auto;
    display: flex;
    justify-content: space-between;
    padding-left: 40px;
    h1 {
        margin: 0;
        font-size: 24px;
    }
`;
export const Coin = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 50px;
        height: 50px;
    }
    h1 {
        font-size: 24px;
        margin-left: 10px;
    }
    h3 {
        font-size: 15px;
        margin-left: 10px;
        color: #ffffff;
        opacity: 0.6;
    }
`;
export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const Right = styled.div`
    display: flex;
    align-items: center;
`;
export const Price = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
`;
export const OldPrice = styled.div`
    margin-left: 20px;
    font-size: 20px;
`;
export const Card = styled.div`
    background: #242731;

    margin-top: 10px;
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
        height: 300px;
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
    text-align: center;
`;
