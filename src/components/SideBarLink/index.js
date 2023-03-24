import { Link, NavLink } from "react-router-dom";

const SidebarLink = ({ child }) => {
    return (
        <Link
            onClick={() => {
                console.log("hi");
            }}
        >
            {child}
        </Link>
    );
};

export default SidebarLink;
