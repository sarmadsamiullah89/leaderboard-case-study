import { SORTING_TYPE } from "utils/appEnums";
import { UserStats } from "../../utils/appModels";

interface SortButtonProps {
    label: string;
    sortType: SORTING_TYPE;
    currentSort: SORTING_TYPE;
    iconName: string;
    onSort: (sortType: SORTING_TYPE) => void;
}

interface UserCardProps {
    user: UserStats;
    isMatch?: boolean;
}

export type {
    SortButtonProps,
    UserCardProps
}