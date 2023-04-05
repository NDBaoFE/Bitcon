import styled from "styled-components";
import { themes } from "../../utils/theme/theme";
import GoogleButton from "react-google-button";
import { Form, Typography, Input, Button } from "antd";
const { Title } = Typography;
export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
`;
export const LeftWrapper = styled.div`
    width: 50%;
    background-color: ${themes.colors.background};
    min-height: 100vh;
`;
export const RightWrapper = styled.div`
    background-color: white;
    width: 50%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;
export const Img = styled.img``;
export const LoginContainer = styled.div``;
export const HeroWrapper = styled.div`
    h1 {
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 49px;

        color: #525252;
        margin-bottom: 20px;
    }
    h3 {
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        /* identical to box height */
        margin-bottom: 10px;
        color: #525252;
    }
    p {
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 20px;
        color: #dddddd;
    }
`;
export const MyGoogleBtn = styled(GoogleButton)`
    font-family: "Nunito Sans";
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
`;
export const StyledForm = styled(Form)`
    width: 450px;
    .ant-input:hover {
        border-color: ${themes.colors.primary};
    }
`;
export const Label = styled(Title)`
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */

    /* Gray 3 */

    color: #828282;
`;
export const LoginSection = styled.div``;
export const StyledInput = styled(Input)`
    width: 420px;
    height: 45px;
`;
export const LoginBtn = styled(Button)`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13px 10px 12px;
    gap: 13px;
    background: #252a36;
    border-radius: 6px;

    background: #252a36;
    border-radius: 6px;
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 25px;
    color: white;
`;
