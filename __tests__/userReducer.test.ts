import {
    SET_USERS,
    SET_FILTERED_USERS,
    SET_SORTING,
    SET_SEARCH_INPUT,
} from "store/types";
import userReducer from "store/userReducer";
import { SORTING_TYPE } from "utils/appEnums";
import { UserReducerState, UserStats } from "utils/appModels";

describe("User Reducer", () => {
    const initialState: UserReducerState = {
        userList: [],
        filteredUsers: [],
        sortBy: SORTING_TYPE.RANK,
        isAscending: true,
        searchInput: "",
    };

    it("should return the initial state", () => {
        expect(userReducer(undefined, { type: "" })).toEqual(initialState);
    });

    it("should handle SET_USERS", () => {
        const users: UserStats[] = [{
            bananas: 100,
            lastDayPlayed: "2017-11-01",
            longestStreak: 5,
            name: "Adh Fuoo",
            stars: 4,
            subscribed: false,
            uid: "x8RNvUgv5pZqDVatEXb2aYgSflq1",
            rank: 1
        }];
        const action = { type: SET_USERS, payload: users };
        const expectedState = { ...initialState, userList: users, filteredUsers: users.slice(0, 10) };
        expect(userReducer(initialState, action)).toEqual(expectedState);
    });

    it("should handle SET_FILTERED_USERS", () => {
        const filteredUsers: UserStats[] = [{
            bananas: 40,
            lastDayPlayed: "2017-11-01",
            longestStreak: 4,
            name: "Adh Fuoo",
            stars: 3,
            subscribed: false,
            uid: "x8RNvUgv5pZqDVatEXb2aYgSflq1",
            rank: 2
        }];
        const action = { type: SET_FILTERED_USERS, payload: filteredUsers };
        const expectedState = { ...initialState, filteredUsers };
        expect(userReducer(initialState, action)).toEqual(expectedState);
    });

    it("should handle SET_SORTING", () => {
        const action = { type: SET_SORTING, payload: { sortBy: SORTING_TYPE.NAME, isAscending: false } };
        const expectedState = { ...initialState, sortBy: SORTING_TYPE.NAME, isAscending: false };
        expect(userReducer(initialState, action)).toEqual(expectedState);
    });

    it("should handle SET_SEARCH_INPUT", () => {
        const action = { type: SET_SEARCH_INPUT, payload: "Adh" };
        const expectedState = { ...initialState, searchInput: "Adh" };
        expect(userReducer(initialState, action)).toEqual(expectedState);
    });
});
