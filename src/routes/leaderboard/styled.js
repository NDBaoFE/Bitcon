import styled from "styled-components";
import { themes } from "../../utils/theme/theme";
import { Avatar, Table } from "antd";
export const Container = styled.div`
    min-height: 100vh;
    font-family: "Nunito Sans", sans-serif;
`;
export const TopContainer = styled.div`
    width: 90%;
    height: 400px;
    border-radius: 10px;
    background-color: ${themes.colors.background};
    margin: 20px auto;
`;
export const Hero = styled.h1`
    font-size: 70px;
    color: white;
    font-weight: 800px;
    text-align: center;
    color: ${themes.colors.primary};
`;
export const Top = styled.div`
    display: flex;
    justify-content: space-around;
`;
export const Player = styled.div`
    width: calc((100% - 350px) / 3);
    height: 300px;
    background: #fff;
    margin-bottom: 30px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    h1 {
        text-align: center;
        font-size: 36px;
    }
`;
export const TopCard = styled.div`
    background: #f9f6ff;
    padding: 25px 0 50px 0;
    background: linear-gradient(45deg, #7e57c2, #ab47bc);
`;

export const BodyCard = styled.div`
    position: relative;
    text-align: center;
    height: 100%;
    h2 {
        margin-top: 50px;
        font-size: 24px;
    }
    h5 {
        font-size: 16px;
    }
`;
export const AbsoluteAvatar = styled(Avatar)`
    position: absolute;
    transform: translate(-50%, -110%);
`;
export const ActionPart = styled.div`
    display: flex;
`;
export const AntdTable = styled(Table)`
    max-width: 100%;
    flex: 1 0 0;
`;
export const StyledLeaderBoard = styled.div`
    max-width: 90%;
    display: flex;
    justify-content: center;
    background-color: ${themes.colors.background};
    padding: 30px 20px;
    margin: 30px auto;
    border-radius: 10px;
    .ant-table-wrapper .ant-table-thead > tr > th,
    .ant-table-wrapper .ant-table-thead > tr > td {
        background: ${themes.colors.primary};
        color: white;
        font-size: 20px;
        border: none;
    }
    .ant-table-wrapper .ant-table-tbody > tr > td {
        border: none;
    }
    .ant-table-wrapper .ant-table {
        color: white;
        font-size: 20px;
    }
    .ant-table-wrapper .ant-table-tbody > tr {
        border-color: ${themes.colors.primary};
        background: #1b1e2a;
        border: none;
    }
    .ant-table-wrapper .ant-table-tbody > tr.ant-table-row:hover > td,
    .ant-table-wrapper .ant-table-tbody > tr > td.ant-table-cell-row-hover {
        background: ${themes.colors.background};
    }
`;
export const FlexContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;
export const StyledAvatar = styled(Avatar)``;
export const HeroSection = styled.div`
    width: 90%;
    display: flex;
    margin: 30px auto 50px;
    align-items: center;
    justify-content: space-around;
    background: ${themes.colors.background};
`;
export const Left = styled.div``;
export const Right = styled.div``;
export const Description = styled.h3`
    color: white;
    font-size: 18px;
`;
export const Illustrator = styled.img`
    width: 400px;
`;
export const Button = styled.div`
    width: 100px;
    height: 50px;
    background-color: ${themes.colors.primary};
    margin-top: 30px;
    margin-left: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    cursor: pointer;
    &:hover {
        background: #5056bf;
    }
`;
