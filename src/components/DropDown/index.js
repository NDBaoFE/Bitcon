import { DownOutlined } from "@ant-design/icons";
import { Space } from "antd";

import { MyDropdown } from "./styled";

const DropDown = ({ menu, label }) => {
    return (
        <MyDropdown menu={menu} placement="bottomLeft" arrow>
            <a onClick={(e) => e.preventDefault()}>
                <Space style={{ fontSize: "18px" }}>
                    {label}
                    <DownOutlined style={{ fontSize: "14px" }} />
                </Space>
            </a>
        </MyDropdown>
    );
};
export default DropDown;
