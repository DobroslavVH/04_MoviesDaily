import { StyleSheet } from "react-native";
import { black, white } from "../../constants/Color";

const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: white,
        flexGrow: 1,
    },
    movieDetailWrapper: {
        flex: 1,
        backgroundColor: black,
    },
    movieDetail: {
        flex: 1,
        padding: 16,
        paddingTop: 24,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: white,
    },
});

export default styles