import { get, post, put, remove } from "./ApiCaller";

const productApi = {
    getCoin: (token) => {
        const url = `/api/coin`;
        return get(url, {}, { Authorization: token });
    },
    login: (email, password) => {
        const url = `/auth/login`;
        return post(
            url,
            {
                email: email,
                password: password,
            },
            {},
            {}
        );
    },
    getLeaderBoard: (token) => {
        const url = `/auth/leaderboard`;
        return get(url, {}, { Authorization: token });
    },

    getPersonalAccount: (token) => {
        const url = `/auth/profile`;
        return get(url, {}, { authorization: token });
    },

    updateOwnAccount: (info, token) => {
        const url = `/auth/profile/edit`;
        return put(
            url,
            {
                image: info.avatar,
                dateOfBirth: info.birthdate,
                bio: info.bio,
                facebook: info.facebook,
                fullname: info.fullName,
                email: info.email,
                phone: info.phone,
                id: info.id,
                region: "VietNam",
            },
            {},
            { authorization: token }
        );
    },
    signup: (value, token) => {
        const url = `/auth/signup`;
        return post(
            url,
            {
                name: value.name,
                email: value.email,
                password: value.password,
            },
            {},
            {}
        );
    },
    getBalance: (token) => {
        const url = `/auth/balance`;
        return get(url, {}, { authorization: token });
    },
};

export default productApi;
