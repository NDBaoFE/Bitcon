import io from "socket.io-client";
import jwt_decode from "jwt-decode";
import localStorageUtils from "./utils/localStorageUtils";

let socket;

export function createSocketConnection() {
    const auth = localStorageUtils.getItem("authorization");
    const { accountId } = jwt_decode(auth);
    socket = io("http://localhost:8080", {
        query: { "account-id": accountId },
    });
}

export function getSocket() {
    if (!socket) {
        createSocketConnection();
    }
    return socket;
}
