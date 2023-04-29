import { StyledLayout } from "./style";
import { Outlet } from "react-router-dom";
import SidebarComponent from "./SideBar/index";
import { themes } from "../utils/theme/theme";
import { useState } from "react";
const { Content } = StyledLayout;
const LayoutComponent = () => {
    const [collapsed, setCollapsed] = useState(false);
    console.log(collapsed);
    return (
        <StyledLayout collapsed={collapsed}>
            <SidebarComponent
                collapsed={collapsed}
                setCollapsed={setCollapsed}
            />
            <StyledLayout
                className="site-layout"
                style={{
                    background: `${themes.colors.dark}`,
                    marginLeft: "0",
                }}
                collapsed={collapsed}
            >
                {/* <PageHeaderComponent /> */}
                <Content style={{ minHeight: "100vh", background: "#1b1e2a" }}>
                    <div className="site-layout-background">
                        <Outlet />
                    </div>
                </Content>
            </StyledLayout>
        </StyledLayout>
    );
};

export default LayoutComponent;
