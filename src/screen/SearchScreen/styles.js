import { StyleSheet } from "react-native";
import { darkGray, lightGray, white } from "../../constants/Color";

const styles = StyleSheet.create({
    subTitle: {
        fontSize: 14,
        color: darkGray,
    },
    searchContainer: {
        marginHorizontal: 16,
        backgroundColor: lightGray,
        borderRadius: 24,
        flexDirection: "row",
    },
    searchInput: {
        fontFamily: "Montserrat-Medium",
        fontSize: 14,
        flex: 1,
        marginRight: 12,
    },
    emptyComponent: {
        flex: 1,
        height: '100%',
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles