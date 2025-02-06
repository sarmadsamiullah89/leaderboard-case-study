import {
    SET_USERS,
    SET_FILTERED_USERS,
    SET_SORTING,
    SET_SEARCH_INPUT,
} from "store/types";
import {
    setUsers,
    setFilteredUsers,
    setSorting,
    setSearchInput,
} from "store/actions";
import { SORTING_TYPE } from "utils/appEnums";
import { UserStats } from "utils/appModels";

describe("Redux Actions", () => {
    it("should create an action to set users", () => {
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
        const expectedAction = { type: SET_USERS, payload: users };
        expect(setUsers(users)).toEqual(expectedAction);
    });

    it("should create an action to set filtered users", () => {
        const users: UserStats[] = [{
            bananas: 40,
            lastDayPlayed: "2017-11-01",
            longestStreak: 4,
            name: "Adh Fuoo",
            stars: 3,
            subscribed: false,
            uid: "x8RNvUgv5pZqDVatEXb2aYgSflq1",
            rank: 2
        }];
        const expectedAction = { type: SET_FILTERED_USERS, payload: users };
        expect(setFilteredUsers(users)).toEqual(expectedAction);
    });

    it("should create an action to set sorting", () => {
        const expectedAction = { type: SET_SORTING, payload: { sortBy: SORTING_TYPE.RANK, isAscending: true } };
        expect(setSorting(SORTING_TYPE.RANK, true)).toEqual(expectedAction);
    });

    it("should create an action to set search input", () => {
        const expectedAction = { type: SET_SEARCH_INPUT, payload: "Alice" };
        expect(setSearchInput("Alice")).toEqual(expectedAction);
    });
});
