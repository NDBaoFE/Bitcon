import { Select } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const { Option } = Select;

const SelectRegion = () => {
    const dispatch = useDispatch();

    const regions = useSelector(selector.regions);
    const region = useSelector(selector.region);

    const handleRoleChange = (value) => {
        dispatch(actions.setRole(value));
        dispatch(actions.getAccount());
    };

    return (
        <Select defaultValue={regions[region]} onChange={handleRoleChange}>
            {regions.map((region, index) => (
                <Option value={index} key={index}>
                    {region}
                </Option>
            ))}
        </Select>
    );
};

export default SelectRegion;
