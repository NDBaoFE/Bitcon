import styled from "styled-components";
import { themes } from "../../utils/theme/theme";
export const Container = styled.div`
    min-height: 100vh;
    max-width: 800px;
    margin: 20px auto;
    font-size: 18px;
    color: white;
    .article-content {
    }
    .article-content div {
        margin: 20px auto;
        max-width: 600px;
    }
    a {
        color: ${themes.colors.primary};
    }
`;
export const Hero = styled.h1`
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0.03em;
    margin-bottom: 30px;
`;

export const SubHero = styled.div`
    font-size: 19px;
    max-width: 600px;
    margin: 0 auto;
`;

export const Thubmnail = styled.img`
    margin: 20px 0;
    width: 120%;
    height: 400px;
    border-radius: 10px;
`;
export const Description = styled.div`
    font-size: 19px;
    display: flex;
    min-height: 40px;
    justify-content: space-between;
`;

export const Author = styled.div`
    font-size: 19px;
    margin-left: 30px;
`;
export const PubDate = styled.div`
    margin-right: 30px;
`;
