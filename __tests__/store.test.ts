import configureMockStore from "redux-mock-store";
import {
    setUsers,
    setFilteredUsers,
    setSorting,
    setSearchInput
} from "store/actions";
import { SORTING_TYPE } from "utils/appEnums";
import { UserStats } from "utils/appModels";

const mockStore = configureMockStore();
let store = mockStore({
    user: {
        userList: [],
        filteredUsers: [],
        sortBy: SORTING_TYPE.RANK,
        isAscending: true,
        searchInput: "",
    },
});

describe("Redux Store with Combined Reducer", () => {
    beforeEach(() => {
        store.clearActions();
    });

    it("should update state when SET_USERS is dispatched", () => {
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
        store.dispatch(setUsers(users));

        expect(store.getActions()).toContainEqual({
            type: "SET_USERS",
            payload: users,
        });
    });

    it("should update state when SET_FILTERED_USERS is dispatched", () => {
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
        store.dispatch(setFilteredUsers(users));

        expect(store.getActions()).toContainEqual({
            type: "SET_FILTERED_USERS",
            payload: users,
        });
    });

    it("should update sorting state when SET_SORTING is dispatched", () => {
        store.dispatch(setSorting(SORTING_TYPE.NAME, false));

        expect(store.getActions()).toContainEqual({
            type: "SET_SORTING",
            payload: { sortBy: SORTING_TYPE.NAME, isAscending: false },
        });
    });

    it("should update search input state when SET_SEARCH_INPUT is dispatched", () => {
        store.dispatch(setSearchInput("Adh"));

        expect(store.getActions()).toContainEqual({
            type: "SET_SEARCH_INPUT",
            payload: "Adh",
        });
    });
});
