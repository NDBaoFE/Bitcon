import MovingIcon from "@mui/icons-material/Moving";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
export const views = [
    {
        name: "Time",
        img: <AccessTimeIcon color="primary" />,
        value: 200,
    },
    {
        name: "Profit",
        img: <MovingIcon color="success" />,
        value: 200,
    },
    {
        name: "Balance",
        img: <AccountBalanceIcon color="secondary" />,
        value: 200,
    },

    {
        name: "Total Numbers of Players",
        img: <PeopleIcon color="error" />,
        value: 200,
    },
];
