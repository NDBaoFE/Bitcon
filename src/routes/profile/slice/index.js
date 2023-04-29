import { injectReducer } from "../../../store";
import generateActions from "../../../utils/others/generateActions";
import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import localStorageUtils from "../../../utils/localStorageUtils";
const fullName = faker.name.fullName().split(" ");
export const initialState = {
    fullName: localStorageUtils.getItem("user"),
    avatar: localStorageUtils.getItem("image") || faker.image.cats(160, 160),
    joinDate: faker.date.past(2).getTime(),
    birthdate: faker.date
        .birthdate({ min: 18, max: 25, mode: "age" })
        .getTime(),
    email: "ngochan@gmail.com",
    facebook:
        "facebook.com/" + faker.internet.userName(fullName[0], fullName[1]),
    phone: "0946222486",
    bio: "",
    id: null,
    modal: {
        confirm: false,
    },
    region: ["VietNam", "US", "India", "China", "Singapore"],
    region: -1,
    role: "User",
    info: {},
};

export const name = "editAccount";

export const slice = createSlice({
    name,
    initialState,
    reducers: {
        ...generateActions(initialState),

        modal_confirm: (state, action) => {
            state.modal.confirm = action.payload;
        },
        setAccount: (state, action) => {
            state.fullName = action.payload.fullname;
            state.avatar = action.payload.image;
            state.joinDate = "2023-03-19";
            state.birthdate = action.payload.dateOfBirth;
            state.email = action.payload.email;
            state.bio = action.payload.bio || "";
            state.id = action.payload.AccountId;
            state.phone = action.payload.phone;
            state.facebook = action.payload.facebook || "";
        },
        getAccount: (state) => {
            state.info = {
                fullName: state.fullName,
                avatar: state.avatar,
                joinDate: state.joinDate,
                birthdate: state.birthdate,
                email: state.email,
                facebook: state.facebook,
                bio: state.bio,
                id: state.id,
                phone: state.phone,
            };
        },
        getInitialAccount: (state, action) => {
            state.fullName = action.payload;
        },
    },
});

injectReducer(name, slice.reducer);

export const { actions } = slice;
