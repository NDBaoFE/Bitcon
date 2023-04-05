import io from "socket.io-client";
import jwt_decode from "jwt-decode";
import localStorageUtils from "./utils/localStorageUtils";
const auth = localStorageUtils.getItem("authorization");
const { accountId } = jwt_decode(auth);
const socket = io("http://localhost:8080", {
    query: { "account-id": accountId },
});

export default socket;
