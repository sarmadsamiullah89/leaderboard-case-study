import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { leaderBoardData } from "utils/appData";
import { UserStats } from "utils/appModels";
import { SORTING_TYPE } from "utils/appEnums";
import { showSuccessMsg } from "utils/appMessages";
import {
    setFilteredUsers,
    setSearchInput,
    setSorting,
    setUsers,
} from 'store/actions'
import { RootState } from "store/index";


const useController = () => {
    const dispatch = useDispatch();
    const {
        userList,
        filteredUsers,
        sortBy,
        isAscending,
        searchInput
    } = useSelector((state: RootState) => state.userReducer);

    useEffect(() => {
        const sortedUsers = [...leaderBoardData].sort((a, b) => {
            if (a.bananas == b.bananas) {
                return a.name.localeCompare(b.name)
            } else return b.bananas - a.bananas
        });
        const _userList: UserStats[] = []
        sortedUsers.map((item, index) => {
            if (item.name) _userList.push({ ...item, rank: index + 1 })
        })
        dispatch(setUsers(_userList));
    }, [])

    const handleSearch = (_sortBy = sortBy, _isAscending = isAscending, _searchInput = searchInput) => {
        let sortedUsers = [...userList];

        if (_sortBy === "NAME") {
            sortedUsers.sort((a, b) => (_isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
        } else {
            sortedUsers.sort((a, b) => (_isAscending ? a.rank - b.rank : b.rank - a.rank));
        }

        const foundUserIndex = sortedUsers.findIndex((user) => user.name.toLowerCase().includes(_searchInput.toLowerCase()));

        if (foundUserIndex === -1) {
            showSuccessMsg(`${_searchInput} does not exist! Please specify an existing user name!`);
            return;
        }

        const foundUser = sortedUsers[foundUserIndex];
        let displayedUsers = sortedUsers.slice(0, 10);

        if (!displayedUsers.includes(foundUser)) {
            displayedUsers.pop();
            displayedUsers.push({ ...foundUser, rank: foundUserIndex + 1 });
        }

        dispatch(setFilteredUsers(displayedUsers));
    };

    const onChangeText = (text: string) => {
        dispatch(setSearchInput(text));
    };

    const handleSort = (_sortBy: SORTING_TYPE) => {
        let _isAscending = isAscending;
        if (sortBy === _sortBy) {
            _isAscending = !isAscending;
        }
        dispatch(setSorting(_sortBy, _isAscending));
        handleSearch(_sortBy, _isAscending);
    };

    return {
        sortBy,
        isAscending,
        searchInput,
        filteredUsers,

        handleSort,
        handleSearch,
        onChangeText,
    };
};

export default useController;
