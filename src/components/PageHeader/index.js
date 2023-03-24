import { Layout, Breadcrumb, Modal } from "antd";
import { PageHeader } from "@ant-design/pro-layout";
import { Link, useLocation, useParams } from "react-router-dom";

import { PageHeaderContainer } from "./style";

import { ArrowLeftOutlined } from "@ant-design/icons";

const { Header } = Layout;

let breadcrumbNameMap = {
    "/event": "Quản lý sự kiện",
    "/manage-resource": "Quản lý tài nguyên",
    "/member": "Quản lý thành viên",
    "/blog": "Quản lý bài viết",
    "/personal-blog": "Quản lý bài viết cá nhân",
    "/personal-blog/create": "Tạo bài viết",
    "/personal-blog/edit": "Chỉnh sửa bài viết",
    "/personal-blog/preview": "Xem trước bài viết",
    "/manage-announcement": "Quản lý thông báo",
    "/manage-announcement/": "Xem thông báo",
    "/information": "Thông tin cá nhân",
    "/account": "Quản lý tài khoản",
    "/account/edit-account": "Chỉnh sửa thông tin",
    "/comment": "Quản lý bình luận, câu hỏi",
    "/recruitmembers": "Tuyển thành viên",
    "/information/view-information": "Xem thông tin",
    "/notifications": "Thông báo",
};

const PageHeaderComponent = () => {
    let { id } = useParams();
    breadcrumbNameMap[`/personal-blog/${id}`] = `Chi tiết bài viết`;
    breadcrumbNameMap[`/notifications/${id}`] = `Xem thông báo`;
    breadcrumbNameMap[`/manage-announcement/${id}`] = `Xem thông báo`;
    breadcrumbNameMap[`/manage-resource/${id}`] = `tài nguyên số ${id}`;
    breadcrumbNameMap[`/account/${id}`] = `Tài khoản số ${id}`;
    const [modal, contextHolder] = Modal.useModal();
    const location = useLocation();
    const pathSnippets = location.pathname.split("/").filter((i) => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
        );
    });
    const onBack = () => {
        window.history.back();
    };
    return (
        <PageHeaderContainer>
            <Header
                className="site-layout-sub-header-background"
                style={{
                    height: 100,
                    padding: 0,
                    background: "rgb(255, 255, 255)",
                }}
            >
                <Breadcrumb>
                    {location.pathname == "/home" ? (
                        <div style={{ height: "22px" }}></div>
                    ) : (
                        extraBreadcrumbItems
                    )}
                </Breadcrumb>

                <PageHeader
                    backIcon={
                        location.pathname !== "/home" ? (
                            <ArrowLeftOutlined />
                        ) : (
                            false
                        )
                    }
                    className="site-page-header-responsive"
                    title={"hi"}
                    style={{ background: "#FFFFFF" }}
                    onBack={() => onBack()}
                />
            </Header>
            {contextHolder}
        </PageHeaderContainer>
    );
};

export default PageHeaderComponent;
