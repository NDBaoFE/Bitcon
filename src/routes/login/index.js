import React, { useState } from "react";
import {
    Container,
    LeftWrapper,
    RightWrapper,
    Img,
    LoginContainer,
    HeroWrapper,
    MyGoogleBtn,
    LoginSection,
    StyledForm,
    Label,
    StyledInput,
    LoginBtn,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import productApi from "../../utils/api/productApi";
import { Checkbox } from "antd";
import { Col, Form, Row } from "antd";
import Logo from "../../assets/images/Bitcoin.png";
import { toastError, toastSuccess } from "../../components/ToastNotification";
import { actions } from "../profile/slice";
import localStorageUtils from "../../utils/localStorageUtils";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [form] = StyledForm.useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleFinish = async (value) => {
        try {
            const res = await productApi.login(value.email, value.password);
            switch (await res.status) {
                case 200:
                    console.log(res.data.account.fullname);
                    dispatch(
                        actions.getInitialAccount(res.data.account.fullname)
                    );
                    toastSuccess("Login Succesfully");

                    localStorageUtils.setItem("authorization", res.data.token);
                    localStorageUtils.setItem(
                        "user",
                        res.data.account.fullname
                    );
                    localStorageUtils.setItem("image", res.data.account.image);
                    navigate("/home");
                    break;
                default:
                    toastError("Login no success");
                    break;
            }
        } catch (e) {
            console.log(e);
            toastError("Can't login right now, please try again later");
        }
    };
    const handleFinishFailed = async (value) => {
        try {
            console.log(value);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <Container>
            <LeftWrapper />
            <RightWrapper>
                <LoginContainer>
                    <Img src={Logo} />
                </LoginContainer>
                <HeroWrapper>
                    <h1>Login to your Account</h1>
                    <h3>See what is going on with your business</h3>
                    <MyGoogleBtn
                        onClick={() => {
                            console.log("Google button clicked");
                        }}
                    />
                    <p>
                        ----------------- or Sign in with Email
                        -----------------
                    </p>
                    <LoginSection>
                        <StyledForm
                            form={form}
                            name="form1"
                            onFinish={handleFinish}
                            onFinishFailed={handleFinishFailed}
                        >
                            <Col span={24}>
                                <Label level={5}>Email</Label>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Email can't be blank!!",
                                        },
                                    ]}
                                >
                                    <StyledInput
                                        placeholder="Email"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Label level={5}>Password</Label>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Type in your password!!",
                                        },
                                    ]}
                                >
                                    <StyledInput
                                        type="password"
                                        placeholder="Email"
                                        value={password}
                                        onChange={handlePassword}
                                    />
                                </Form.Item>
                            </Col>
                            <Row>
                                <Col span={15}>
                                    <Checkbox>Remember me</Checkbox>
                                </Col>
                                <Col span={9}>Forgot password ?</Col>
                            </Row>
                            <LoginBtn type="primary" htmlType="submit">
                                Login
                            </LoginBtn>
                        </StyledForm>
                    </LoginSection>
                </HeroWrapper>
            </RightWrapper>
        </Container>
    );
}

export default Login;
