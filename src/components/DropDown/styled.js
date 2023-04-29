import styled from "styled-components";
import { Dropdown } from "antd";
export const MyDropdown = styled(Dropdown)`
    display: flex;
    align-items: center;
    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 21px;
    margin-right: 14px;
    /* identical to box height */

    text-align: center;
    .dropdown-menu {
        background-color: rgba(
            255,
            255,
            255,
            0.8
        ); /* Sets the background color with an alpha channel for transparency */
        backdrop-filter: blur(
            5px
        ); /* Applies a blur filter to the background */
        -webkit-backdrop-filter: blur(
            5px
        ); /* Applies a blur filter to the background for Safari */
    }
`;
