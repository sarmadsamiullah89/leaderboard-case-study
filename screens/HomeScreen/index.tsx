import React from "react";
import {
    View,
    TextInput,
    FlatList,
    SafeAreaView,
    StatusBar,
    useColorScheme,
    Pressable,
    Text,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { SORTING_TYPE } from "../../utils/appEnums";
import useController from "./useController";
import {
    SortButton,
    UserCard
} from "./components";
import styles from "./styles";
import appColors from "utils/appColors";

const HomeScreen = () => {
    const {
        sortBy,
        isAscending,
        searchInput,
        filteredUsers,

        handleSort,
        handleSearch,
        onChangeText,
    } = useController()

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        flex: 1,
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <View
                style={{
                    flex: 1,
                    backgroundColor: isDarkMode ? Colors.black : Colors.white,
                }}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={[styles.inputStyle, {
                            color: isDarkMode ? appColors.white : appColors.black,
                            backgroundColor: backgroundStyle.backgroundColor
                        }]}
                        value={searchInput}
                        autoCorrect={false}
                        returnKeyType={"search"}
                        returnKeyLabel={"Search"}
                        placeholder={"Search user"}
                        onChangeText={onChangeText}
                        onSubmitEditing={() => handleSearch()}
                    />
                    <Pressable
                        style={styles.searchButton}
                        onPress={() => handleSearch()}>
                        <Text style={{ color: appColors.white }}>
                            {"Search"}
                        </Text>
                    </Pressable>
                </View>
                <View style={{ flexDirection: "row", paddingBottom: 10 }}>
                    <SortButton
                        label={"Name"}
                        currentSort={sortBy}
                        sortType={SORTING_TYPE.NAME}
                        iconName={isAscending ? "sort-alpha-asc" : "sort-alpha-desc"}
                        onSort={handleSort}
                    />
                    <SortButton
                        label={"Rank"}
                        currentSort={sortBy}
                        sortType={SORTING_TYPE.RANK}
                        iconName={isAscending ? "sort-numeric-asc" : "sort-numeric-desc"}
                        onSort={handleSort}
                    />
                </View>
                <FlatList
                    data={filteredUsers}
                    extraData={filteredUsers}
                    keyExtractor={(item, index) => `${item.name}${index}`}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        const isMatch = searchInput.length > 2 && item.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
                        return (
                            <UserCard
                                user={item}
                                isMatch={isMatch}
                            />
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;


