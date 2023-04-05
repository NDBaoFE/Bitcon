import styled from "styled-components";
import { Avatar, Dropdown, Button } from "antd";
import { themes } from "../../utils/theme/theme";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 30px;
    font-family: "Nunito Sans", sans-serif;
    margin-top: 12px;
`;

export const Ava = styled(Avatar)`
    margin-right: 20px;
`;

export const MyDropdown = styled(Dropdown)`
    display: flex;
    align-items: center;
    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-right: 14px;
    /* identical to box height */

    text-align: center;
`;
export const StyledButton = styled(Button)``;
