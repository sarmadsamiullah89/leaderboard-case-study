import { SORTING_TYPE } from "./appEnums";

interface UserStats {
    bananas: number;
    lastDayPlayed: string;
    longestStreak: number;
    name: string;
    stars: number;
    subscribed: boolean;
    uid: string;
    rank: number
}

interface UserReducerState {
    userList: UserStats[];
    filteredUsers: UserStats[];
    sortBy: SORTING_TYPE;
    isAscending: boolean;
    searchInput: string;
}


export type {
    UserStats,
    UserReducerState,
}