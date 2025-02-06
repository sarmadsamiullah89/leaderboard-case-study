import { SORTING_TYPE } from "utils/appEnums";
import {
    SET_FILTERED_USERS,
    SET_SEARCH_INPUT,
    SET_SORTING,
    SET_USERS,
} from "./types";
import { UserReducerState } from "utils/appModels";

const initialState: UserReducerState = {
    userList: [],
    filteredUsers: [],
    sortBy: SORTING_TYPE.RANK,
    isAscending: true,
    searchInput: "",
};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_FILTERED_USERS:
            return { ...state, filteredUsers: action.payload };
        case SET_SEARCH_INPUT:
            return { ...state, searchInput: action.payload };
        case SET_SORTING:
            return { ...state, sortBy: action.payload.sortBy, isAscending: action.payload.isAscending };
        case SET_USERS:
            return { ...state, userList: action.payload, filteredUsers: action.payload.slice(0, 10) };
        default:
            return state;
    }
};

export default userReducer;
