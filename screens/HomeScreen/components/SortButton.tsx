import React from 'react';
import {
    Pressable,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import appColors from 'utils/appColors';
import { SortButtonProps } from '../model';

const SortButton: React.FC<SortButtonProps> = (props) => {
    const {
        label,
        currentSort,
        sortType,
        iconName,
        onSort
    } = props

    const isDarkMode = useColorScheme() === 'dark';
    const isActive = currentSort === sortType;

    const darkColor = isActive ? "white" : "gray"
    const lightColor = isActive ? "black" : "gray"

    return (
        <Pressable
            onPress={() => onSort(sortType)}
            style={styles.buttonContainer}>
            <Text style={[styles.buttonText, { color: isDarkMode ? darkColor : lightColor }]}>
                {label}
            </Text>
            {isActive && (
                // @ts-ignore
                <FontAwesome
                    size={14}
                    color={appColors.primary}
                    name={iconName}
                />
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    buttonText: {
        color: appColors.primary,
        marginRight: 5,
    },
});

export default SortButton;
