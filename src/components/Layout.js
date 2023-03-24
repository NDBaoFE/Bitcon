import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SidebarComponent from "./SideBar/index";
import { themes } from "../utils/theme/theme";
import PageHeaderComponent from "./PageHeader";

const { Content } = Layout;
const LayoutComponent = () => {
    return (
        <Layout>
            <SidebarComponent />
            <Layout
                className="site-layout"
                style={{
                    background: `${themes.colors.dark}`,
                    marginLeft: "243px",
                }}
            >
                {/* <PageHeaderComponent /> */}
                <Content style={{ minHeight: "100vh" }}>
                    <div className="site-layout-background">
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutComponent;
