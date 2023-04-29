import styled from "styled-components";
import { themes } from "../../utils/theme/theme";
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 30px auto;
`;
export const Hero = styled.h5`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
`;
export const Logo = styled.div`
    width: 58px;
    height: 58px;
    background: #373d47;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
    margin-left: 20px;
    svg {
        width: 1.5em;
        height: 1.5em;
    }
`;
export const Item = styled.div`
    width: 40%;
    background: ${themes.colors.background};
    display: flex;
    border-radius: 12px;
    height: 80px;
    color: white;
    margin-bottom: 15px;
    align-items: center;
`;
export const HeroSection = styled.div``;
export const Info = styled.h5`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
`;
