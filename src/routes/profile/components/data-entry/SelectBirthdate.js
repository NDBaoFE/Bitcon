import { DatePicker } from "antd";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const SelectBirthdate = () => {
    const dispatch = useDispatch();

    const birthdate = useSelector(selector.birthdate);
    console.log("Birthdate from Redux store:", birthdate);
    const handleBirthdateChange = (date) => {
        if (date) {
            dispatch(actions.setBirthdate(date.valueOf()));
            dispatch(actions.getAccount());
        } else {
            console.log(date);
        }
    };

    return (
        <DatePicker
            value={moment(birthdate)}
            onChange={handleBirthdateChange}
            allowClear={false}
        />
    );
};

export default SelectBirthdate;
