import styled from "styled-components";
import { themes } from "../../../utils/theme/theme";
import { Pagination } from "antd";
export const Container = styled.div``;
export const Hero = styled.div`
    margin: 32px 0 32px 32px;
    font-size: 24px;
    line-height: 1.33333;
    color: white;
`;
export const BlogWrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 40px auto;
    justify-content: space-around;
`;
export const BlogItem = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 calc(50% - 32px);
    flex: 0 0 calc(50% - 32px);
    width: calc(50% - 32px);
    margin: 40px 16px 0;
    padding: 8px;
    border-radius: 20px;
    background: ${themes.colors.background};
    -webkit-box-shadow: 0 5px 30px rgba(0, 0, 0, 0.07);
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.07);
    cursor: pointer;
    max-width: 350px;
    &:hover > div > h1 {
        color: ${themes.colors.primary};
    }
`;
export const ItemImg = styled.img`
    width: 100%;
    border-radius: 20px;
    height: 250px;
    object-fit: cover;
`;
export const Date = styled.div`
    display: inline-block;
    margin-bottom: 8px;
    padding: 0 16px;
    margin-top: 20px;
    border-radius: 16px;
    font-size: 12px;
    line-height: 32px;
    font-weight: 500;
    background: rgba(79, 191, 103, 0.15);
    color: #4fbf67;
`;
export const Title = styled.h1`
    font-size: 18px;
    line-height: 1.33333;
    font-weight: 500;
    color: #fff;
    display: block;
    margin-bottom: 16px;
    -webkit-transition: color 0.2s;
    -o-transition: color 0.2s;
    transition: color 0.2s;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;
export const Description = styled.div``;
export const ReadMore = styled.button`
    min-width: 114px;
    height: 48px;
    padding: 0 24px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    -webkit-transition: ease 0.3s;
    border: 1px solid #e4e4e4;
    -o-transition: all 0.3s;
    transition: ease 0.3s;
    border-color: rgba(228, 228, 228, 0.1);
    color: #ffffff;
    background-color: ${themes.colors.background};
    a {
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    cursor: pointer;
    &:hover {
        background-color: ${themes.colors.primary};
    }
`;
export const Body = styled.div``;
export const StyledPagination = styled(Pagination)`
    .ant-pagination-item {
        border-radius: 12px;
        border: 1px solid #e4e4e4;
        font-size: 14px;
        font-weight: 700;
        -webkit-transition: all 0.2s;
        -o-transition: all 0.2s;
        transition: all 0.2s;
        border-color: rgba(228, 228, 228, 0.1);
        a {
            color: #fff;
        }
        cursor: pointer;
    }
    .ant-pagination-item-active {
        background: ${themes.colors.primary};
    }
    .ant-pagination-prev .ant-pagination-item-link,
    .ant-pagination-next .ant-pagination-item-link {
        border-radius: 12px;
        border: 1px solid #e4e4e4;
        font-size: 14px;
        font-weight: 700;
        -webkit-transition: all 0.2s;
        -o-transition: all 0.2s;
        transition: all 0.2s;
        border-color: rgba(228, 228, 228, 0.1);
        color: white;
    }
`;
