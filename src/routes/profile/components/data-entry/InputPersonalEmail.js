import { Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const InputPersonalEmail = () => {
    const dispatch = useDispatch();

    const email = useSelector(selector.email);

    const handlePersonalEmailChange = (e) => {
        dispatch(actions.setEmail(e.target.value));
        dispatch(actions.getAccount());
    };

    return (
        <Form.Item
            name="email"
            rules={[
                {
                    required: true,
                    message: "Email cá nhân không được để trống !!",
                },
                {
                    message: "Email chưa đúng format",
                    validator: (_, value) => {
                        if (
                            /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(
                                value
                            )
                        ) {
                            return Promise.resolve();
                        } else {
                            return Promise.reject("Some message here");
                        }
                    },
                },
            ]}
        >
            <Input
                placeholder="personal_email@gmail.com"
                value={email}
                onChange={handlePersonalEmailChange}
                disabled
            />
        </Form.Item>
    );
};

export default InputPersonalEmail;
