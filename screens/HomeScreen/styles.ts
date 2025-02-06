import { StyleSheet } from "react-native";
import appColors from "utils/appColors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.white,
    },
    searchContainer: {
        height: 40,
        marginVertical: 10,
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    inputStyle: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    searchButton: {
        marginLeft: 8,
        borderRadius: 8,
        marginVertical: 1,
        paddingHorizontal: 10,
        justifyContent: "center",
        backgroundColor: appColors.primary,
    },
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