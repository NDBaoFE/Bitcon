import { Layout } from "antd";
import styled from "styled-components";

import { themes } from "../../utils/theme/theme";

const { Sider } = Layout;
export const Logo = styled.div`
    display: flex;
    align-items: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 24px;
    color: #45ce7c;
    margin: 38px 0px;
    height: 32px;
    margin: 16px;
`;

export const Wrapper = styled.div`
    font-family: "Roboto", sans-serif;
    .ant-layout-sider {
        background-color: ${themes.colors.background};
    }

    .ant-menu-submenu-title > .ant-menu-title-content {
        &:hover {
            color: "white";
            background-color: ${themes.colors.primary};
        }
    }

    .ant-menu-light .ant-menu-item:hover {
        color: ${themes.colors.white};
    }
    .ant-menu-light .ant-menu-submenu-title:hover,
    .ant-menu-light .ant-menu-submenu-active {
        color: ${themes.colors.white};
    }
    .ant-menu {
        background-color: ${themes.colors.background};

        &-sub {
            &.ant-menu-inline {
                background: ${themes.colors.submenu};
            }
        }

        &-item {
            color: ${themes.colors.light};
            &-active {
                color: ${themes.colors.white};
            }
            &:hover {
                color: ${themes.colors.white} !important;
                background-color: ${themes.colors.primary} !important;
                a {
                    color: ${themes.colors.white} !important;
                }
            }
            &.ant-menu-submenu-selected {
                color: ${themes.colors.white};
            }
            &-selected {
                color: ${themes.colors.white};
                background-color: ${themes.colors.primary};

                & .ant-menu-title-content a {
                    color: ${themes.colors.white};
                }
            }
            &-title {
                &:hover {
                    color: ${themes.colors.white};
                }
            }
        }

        &-item a {
            color: #ffffff;
            &:hover {
                color: ${themes.colors.white};
            }
        }
        &-submenu {
            &-selected {
                & > .ant-menu-submenu-title > .ant-menu-submenu-arrow {
                    color: ${themes.colors.white};
                }
                color: ${themes.colors.white};
            }
            &-arrow {
                color: ${themes.colors.light};
            }
            &:hover {
                & > .ant-menu-submenu-title > .ant-menu-submenu-arrow {
                    color: ${themes.colors.white};
                }
                & > .ant-menu-submenu-title > .ant-menu-title-content {
                    color: ${themes.colors.white};
                }
            }

            &-title {
                &:hover {
                    color: ${themes.colors.white};
                }
            }
            color: ${themes.colors.light};
        }
        &-submenu a {
            color: ${themes.colors.light};
            &:hover {
                color: ${themes.colors.white};
            }
        }
        &-inline {
            border: none;
            & .ant-menu-item::after {
                border-right: 3px solid ${themes.colors.primary};
            }
        }
    }
    .ant-menu-item {
        &:hover {
            background-color: ${themes.colors.background};
        }
    }
`;
export const SideBar = styled(Sider)`
    /* min-width: 200px; */
    position: fixed !important;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
`;

export const SignOut = styled.button`
    display: flex;
    align-items: center;
    font-family: "Roboto";
    color: rgba(255, 255, 255, 0.85);
    position: absolute;
    bottom: 20px;
    padding-left: 24px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;
