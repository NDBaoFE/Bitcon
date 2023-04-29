import { Typography } from "antd";
import { useSelector } from "react-redux";

import selector from "../../slice/selectors";

const { Title } = Typography;

const FullName = () => {
    const fullName = useSelector(selector.fullName);
    return (
        <Title
            level={4}
            style={{
                margin: 0,
                color: "white",
            }}
        >
            {fullName || "No Name"}
        </Title>
    );
};

export default FullName;
