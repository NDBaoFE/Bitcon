import styled from "styled-components";
import { themes } from "../../utils/theme/theme";

export const InfoContainer = styled.div``;
export const MainWrapper = styled.div`
    margin-left: 20px;
`;
export const ActionWrapper = styled.div`
    min-width: 350px;
    height: 100vh;
    background: ${themes.colors.background};
    display: flex;
    flex-direction: column;
`;
export const ViewContainer = styled.div`
    min-height: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
