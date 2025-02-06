import {
    SET_FILTERED_USERS,
    SET_SEARCH_INPUT,
    SET_SORTING,
    SET_USERS
} from "./types";
import { SORTING_TYPE } from "utils/appEnums";
import { UserStats } from "utils/appModels";

export const setFilteredUsers = (users: UserStats[]) => ({
    type: SET_FILTERED_USERS,
    payload: users,
});

export const setSearchInput = (input: string) => ({
    type: SET_SEARCH_INPUT,
    payload: input,
});

export const setSorting = (sortBy: SORTING_TYPE, isAscending: boolean) => ({
    type: SET_SORTING,
    payload: { sortBy, isAscending },
});

export const setUsers = (users: UserStats[]) => ({
    type: SET_USERS,
    payload: users,
});