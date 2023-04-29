import React from "react";
import { Wrapper, Ava, MyDropdown } from "./styled";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Space } from "antd";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import selector from "../../routes/profile/slice/selectors";
import localStorageUtils from "../../utils/localStorageUtils";
function Profile() {
    var fullName = localStorageUtils.getItem("user");
    const avatar = useSelector(selector.avatar);
    const navigate = useNavigate();
    const handleUserClick = () => {
        navigate("/profile");
    };
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
            <NotificationsIcon
                style={{
                    color: "white",
                    fontSize: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                }}
            />
            <Ava src={avatar} size="large"></Ava>
            <MyDropdown menu={menu} placement="bottomLeft" arrow>
                <Space style={{ fontSize: "14px", cursor: "pointer" }}>
                    {fullName}
                    <DownOutlined
                        style={{ fontSize: "20px", cursor: "pointer" }}
                    />
                </Space>
            </MyDropdown>
            <UserOutlined
                style={{ fontSize: "24px", color: "white", cursor: "pointer" }}
                onClick={handleUserClick}
            />
        </Wrapper>
    );
}

export default Profile;
