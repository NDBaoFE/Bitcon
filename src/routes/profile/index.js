import { useEffect, useState } from "react";

import { Avatar, Col, Row, Space, Card, Typography, Button } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import {
    InputBio,
    InputFacebook,
    InputFullName,
    InputPersonalEmail,
    SelectBirthdate,
    FullName,
    InputPhone,
} from "./components";
import { UploadImage } from "./components/uploadAva";
import { actions } from "./slice";
import selector from "./slice/selectors";
import {
    Container,
    EditButton,
    AvatarContainer,
    StyledForm,
    InfoContainer,
    Label,
    NotiModal,
    Message,
    MessageHero,
    HeroSection,
    Left,
    Hero,
    Description,
    Illustrator,
    Right,
} from "./style";
import Profile from "../../assets/images/profile.png";
import { toastSuccess, toastError } from "../../components/ToastNotification";
import localStorageUtils from "../../utils/localStorageUtils";
import productApi from "../../utils/api/productApi";

import { EditOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const EditAccount = () => {
    const getGutter = (n) => 16 + 8 * n;
    const token = localStorageUtils.getItem("authorization");
    const [isUpdated, setUpdated] = useState(false);
    const dispatch = useDispatch();
    const [form] = StyledForm.useForm();
    const avatar = useSelector(selector.avatar);
    const joinDate = useSelector(selector.joinDate);
    const fullName = useSelector(selector.fullName);
    const phone = useSelector(selector.phone);
    const email = useSelector(selector.email);
    const info = useSelector(selector.info);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        setAccount();
    }, []);
    const getPersonalAccount = async () => {
        const path = await productApi.getPersonalAccount(token);

        return path.data.profile[0];
    };
    const setAccount = async () => {
        const response = await getPersonalAccount();
        let temp = {
            ...response,
            dateOfBirth: moment(response.dateOfBirth).format("YYYY-MM-DD"),
        };
        console.log(temp);
        dispatch(actions.setAccount(temp));
        dispatch(actions.getAccount());
        setUpdated(true);
    };
    const UpdateInfo = async () => {
        dispatch(actions.getAccount());
        const res = await productApi.updateOwnAccount(info, token);
        res.status = 200
            ? toastSuccess(res.data.message)
            : toastError(res.data.message);
    };
    const handleFinish = (value) => {
        UpdateInfo();
    };

    const handleFinishFailed = () => {
        toastError(" Hãy nhập tất cả các field !!");
    };
    const confirm = () => {
        NotiModal.confirm({
            maskClosable: true,
            title: "Bạn có muốn thay đổi thông tin tài khoản?",
            // icon: <ExclamationCircleOutlined />,
            content:
                "Tài khoản sau khi đổi sẽ không còn còn lưu trữ thông tin trước đó được nữa.",
            okText: "Xác nhận",
            cancelText: "Huỷ",
            onOk: () => {
                form.submit();
                // openNotification();
            },
        });
    };
    const handleClose = () => {
        setIsModalOpen(false);
    };
    return (
        <Container>
            <HeroSection>
                <Left>
                    <Hero>Profile</Hero>
                    <Description>
                        Your custom Profile for our site,feel free to custom
                        yours site
                    </Description>
                </Left>
                <Right>
                    <Illustrator src={Profile} />
                </Right>
            </HeroSection>
            {isUpdated && (
                <Space
                    direction="vertical"
                    size={getGutter(1)}
                    style={{ display: "flex" }}
                >
                    <Row gutter={getGutter(1)}>
                        <Col span={7} className="left-side">
                            <Space
                                direction="vertical"
                                size="middle"
                                style={{
                                    display: "flex",
                                    borderRadius: "10px",
                                }}
                                className="pos-sticky"
                            >
                                <Card
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "10px",
                                        background: "#252A36",
                                        border: "none",
                                    }}
                                    loading={false}
                                >
                                    <AvatarContainer>
                                        <Avatar size={160} src={avatar} />

                                        <EditButton
                                            type="primary"
                                            shape="circle"
                                            onClick={() => setLoading(true)}
                                        >
                                            <EditOutlined />
                                        </EditButton>
                                    </AvatarContainer>
                                    <FullName />
                                    <Title
                                        level={5}
                                        style={{
                                            marginTop: 0,
                                            color: "white",
                                        }}
                                    >
                                        User
                                    </Title>
                                    <Text
                                        style={{
                                            marginTop: 0,
                                            color: "white",
                                        }}
                                    >
                                        Ngày tham gia:{" "}
                                        {moment(joinDate).format("DD/MM/yyyy")}
                                    </Text>
                                </Card>
                                <Space size="middle" className="full-fill">
                                    <Button block>Huỷ thay đổi</Button>
                                    <Button
                                        type="primary"
                                        block
                                        onClick={() => confirm()}
                                    >
                                        Xác nhận
                                    </Button>
                                </Space>
                            </Space>
                        </Col>
                        <Col span={16} className="right-side">
                            <Card
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "10px",
                                    background: "#252A36",
                                    border: "none",
                                }}
                                loading={false}
                            >
                                <Space
                                    direction="vertical"
                                    size="middle"
                                    style={{ display: "flex" }}
                                >
                                    <Title
                                        style={{
                                            marginTop: 0,
                                            fontWeight: "700px",
                                            fontSize: "18px",
                                            lineHeight: "175%",
                                            fontStyle: "normal",
                                            color: "white",
                                        }}
                                    >
                                        BASIC INFORMATION
                                    </Title>
                                    <InfoContainer>
                                        <StyledForm
                                            form={form}
                                            name="form1"
                                            initialValues={{
                                                phone: phone,
                                                email: email,
                                                fullName: fullName,
                                            }}
                                            onFinish={handleFinish}
                                            onFinishFailed={handleFinishFailed}
                                        >
                                            <Row
                                                gutter={[
                                                    getGutter(1),
                                                    getGutter(1),
                                                ]}
                                            >
                                                <Col span={24}>
                                                    <Label level={5}>
                                                        Họ và tên
                                                    </Label>
                                                    <InputFullName />
                                                </Col>
                                                
                                                <Col span={24}>
                                                    <Label level={5}>
                                                        Số Điện Thoại
                                                    </Label>
                                                    <InputPhone />
                                                </Col>

                                                <Col span={24}>
                                                    <Label level={5}>
                                                        Email liên kết
                                                    </Label>
                                                    <InputPersonalEmail />
                                                </Col>
                                                <Col span={24}>
                                                    <Label level={5}>
                                                        Facebook
                                                    </Label>
                                                    <InputFacebook />
                                                </Col>
                                                <Col span={24}>
                                                    <Label level={5}>Bio</Label>
                                                    <InputBio />
                                                </Col>
                                            </Row>
                                        </StyledForm>
                                    </InfoContainer>
                                </Space>
                            </Card>
                        </Col>
                    </Row>
                    <UploadImage loading={loading} setLoading={setLoading} />
                </Space>
            )}
            <NotiModal
                width={416}
                height={188}
                open={isModalOpen}
                onCancel={handleClose}
                footer={null}
            >
                <Message>
                    <MessageHero>
                        <h1>Bạn đã thay đổi địa chỉ Email Liên kết </h1>
                        <p>
                            Hãy kiểm tra mail và tiến hành xác thử để hoàn thành
                            việc thay đổi mail liên kết
                        </p>
                    </MessageHero>
                </Message>
            </NotiModal>
        </Container>
    );
};

export default EditAccount;
