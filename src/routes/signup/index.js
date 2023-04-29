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
    LoginQuote,
} from "./style";

import { useNavigate } from "react-router-dom";
import productApi from "../../utils/api/productApi";
import { Checkbox } from "antd";
import { Col, Form, Row } from "antd";
import Logo from "../../assets/images/Bitcoin.png";
import { toastError, toastSuccess } from "../../components/ToastNotification";
import localStorageUtils from "../../utils/localStorageUtils";
function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [name, setName] = useState("");
    const [form] = StyledForm.useForm();
    const navigate = useNavigate();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePassword2 = (e) => {
        setPassword2(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleFinish = async (value) => {
        try {
            if (password !== password2) {
                toastError("Password not match");
                return;
            }
            const res = await productApi.signup(value);
            console.log(res);
            switch (await res.status) {
                case 200:
                    toastSuccess("Sign up  Succesfully");
                    localStorageUtils.setItem("authorization", res.data.token);
                    navigate("/login");
                    break;
                default:
                    toastError("sign Up Unsuccessfully");
                    break;
            }
        } catch (e) {
            console.log(e);
            toastError(e.response.data);
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
                    <h1>Create your new fresh Account</h1>
                    <h3>Explore Cryptocurrency marketplace free </h3>

                    <LoginSection>
                        <StyledForm
                            form={form}
                            name="form1"
                            onFinish={handleFinish}
                            onFinishFailed={handleFinishFailed}
                        >
                            <Col span={24}>
                                <Label level={5}>Your name</Label>
                                <Form.Item
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Name can't be blank!!",
                                        },
                                    ]}
                                >
                                    <StyledInput
                                        placeholder="Your name"
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                </Form.Item>
                            </Col>
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
                                        placeholder="Password"
                                        value={password}
                                        onChange={handlePassword}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Label level={5}>Confirm Password</Label>
                                <Form.Item
                                    name="password2"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please confirm  your password",
                                        },
                                    ]}
                                >
                                    <StyledInput
                                        type="password"
                                        placeholder="Password"
                                        value={password2}
                                        onChange={handlePassword2}
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
                                SignUp
                            </LoginBtn>
                        </StyledForm>
                    </LoginSection>
                </HeroWrapper>
            </RightWrapper>
        </Container>
    );
}

export default SignUp;
