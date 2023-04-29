import { Button, Form, Image, Modal, Typography } from "antd";
import styled from "styled-components";

import { themes } from "../../utils/theme/theme";

const { Title } = Typography;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 85vh;
`;

export const ListWrapper = styled.div`
    max-width: 750px;
    height: 820px;
    background: #ffffff;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12),
        0px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 1.4rem 2rem;
    position: relative;
    overflow-y: scroll;
`;
export const Container = styled.div`
    max-width: 920px;
    margin: 0 auto;
    min-height: calc(100vh - 100px);
    font-family: "Nunito Sans", sans-serif;
    .ant-typography {
        color: white;
    }
    .left-side {
        .ant-avatar {
            margin: 0 auto 1em auto;
            display: block;
        }

        .ant-typography {
            text-align: center;
        }

        span.ant-typography {
            display: block;
        }

        .full-fill {
            display: flex;
            .ant-space-item {
                display: block;
                width: 100%;
            }
        }

        .pos-sticky {
            position: sticky;
            top: 24px;
        }
    }

    .right-side {
        .ant-picker,
        .ant-select {
            width: 100%;
        }
    }
    .ant-btn-primary,
    .ant-btn-primary:hover,
    .ant-btn-primary:focus {
        background: ${themes.colors.primary} !important;
        background-color: ${themes.colors.primary} !important;
        border-color: ${themes.colors.primary} !important;
    }
    .ant-input {
        background-color: #1b1e2a;
        color: white;
        border: none;
        font-family: "Nunito Sans", sans-serif;
        font-size: 18px;
    }
    .ant-picker .ant-picker-input > input {
        background-color: #1b1e2a;
        color: white;
        border: none;
        font-family: "Nunito Sans", sans-serif;
        font-size: 18px;
    }
    .ant-picker {
        background-color: ${themes.colors.background};
        color: white;
        border-color: ${themes.colors.primary};
        font-family: "Nunito Sans", sans-serif;
        font-size: 18px;
    }
    .ant-picker .ant-picker-suffix {
        color: white;
    }
    .ant-input::placeholder {
        color: rgba(255, 255, 255, 0.5); /* Set the color to white */
    }
    .ant-typography {
        color: ${themes.colors.primary};
        font-size: 18px;
    }
`;
export const StyleImage = styled(Image)`
    object-fit: cover;
`;
export const EditButton = styled(Button)`
    position: absolute;
    transform: translate(150px, -70px);
    background-color: ${themes.colors.primary};
    .ant-btn-primary,
    .ant-btn-primary:hover,
    .ant-btn-primary:focus {
        background-color: ${themes.colors.primary} !important;
    }
`;
export const AvatarContainer = styled.div`
    position: relative;
    .ant-btn-primary {
        background: ${themes.colors.primary};
        border-color: ${themes.colors.primary};
        text-shadow: none;
        box-shadow: none;
    }
`;
export const StyledForm = styled(Form)`
    width: 450px;
    .ant-input:hover {
        border-color: ${themes.colors.primary};
    }
`;
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Label = styled(Title)`
    font-family: "Nunito Sans", sans-serif;
    font-style: normal;
    font-weight: 400 !important;
    font-size: 14px;
    line-height: 22px !important;
    /* identical to box height, or 157% */

    /* Character/Title .85 */

    color: rgba(0, 0, 0, 0.85);
`;
export const NotiModal = styled(Modal)`
    .ant-modal-content {
        border-radius: 2px;
        background: #ffffff;
        /* drop-shadow/0.12+0.8+0.5 */

        box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12),
            0px 6px 16px rgba(0, 0, 0, 0.08),
            0px 9px 28px 8px rgba(0, 0, 0, 0.05);
        border-radius: 2px;
    }
    .ant-btn-primary {
        background-color: ${themes.colors.primary};
    }
`;
export const Message = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .anticon {
        color: #faad14;
        font-size: 22px;
        margin: 4px 16px 0 0;
    }
`;
export const MessageHero = styled.div`
    h1 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        /* Character/Title .85 */
        margin: 0;
        color: rgba(0, 0, 0, 0.85);
    }
    p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
    }
`;
export const HeroSection = styled.div`
    width: 96%;
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: ${themes.colors.background};
    border-radius: 10px;
`;
export const Left = styled.div``;
export const Right = styled.div``;
export const Description = styled.h3`
    color: white;
    font-size: 18px;
    margin-left: 30px;
`;
export const Illustrator = styled.img`
    width: 400px;
    margin: 30px;
`;
// export const Button = styled.div`
//     width: 100px;
//     height: 50px;
//     background-color: ${themes.colors.primary};
//     margin-top: 30px;
//     margin-left: 30px;
//     border-radius: 10px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: white;
//     font-size: 18px;
//     cursor: pointer;
//     &:hover {
//         background: #5056bf;
//     }
// `;
export const Hero = styled.h1`
    font-size: 70px;
    color: white;
    margin-left: 30px;
    font-weight: 800px;
    color: ${themes.colors.primary};
`;
