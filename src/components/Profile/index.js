import React from "react";
import { Wrapper, Ava, MyDropdown } from "./styled";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Space } from "antd";
function Profile() {
    const items = [
        {
            key: "1",
            label: (
                <Link to={"/home"} style={{ fontSize: "18px" }}>
                    Home
                </Link>
            ),
        },
        {
            key: "2",
            label: (
                <Link to={"/home"} style={{ fontSize: "18px" }}>
                    Profile
                </Link>
            ),
        },
        {
            key: "3",
            label: (
                <Link to={"/home"} style={{ fontSize: "18px" }}>
                    Logout
                </Link>
            ),
        },
    ];
    const menu = {
        items,
    };
    return (
        <Wrapper>
            <Ava
                src="https://avatars.githubusercontent.com/u/101063286?v=4"
                size="large"
            ></Ava>
            <MyDropdown menu={menu} placement="bottomLeft" arrow>
                <Space>
                    Nguyen Duc Bao
                    <DownOutlined style={{ fontSize: "14px" }} />
                </Space>
            </MyDropdown>
            <UserOutlined style={{ fontSize: "28px", color: "white" }} />
        </Wrapper>
    );
}

export default Profile;
