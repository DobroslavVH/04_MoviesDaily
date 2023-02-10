import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { black, orange, white } from "../../constants/Color";
import { WIDTH } from "../../constants/Layout";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    headerTitle: {
        fontWIDTH: 20,
        flex: 8,
        textAlign: "center",
        alignSelf: "center",
    },
    titleBar: {
        width: 40,
        height: 5,
        backgroundColor: orange,
        marginTop: 4,
        alignSelf: "center",
    },
    mainContainer: {
        height: getStatusBarHeight() * 3,
        width: '100%',
        justifyContent: 'flex-end'
    },
    imageContainer: {
        height: WIDTH * 0.3,
        width: WIDTH * 0.45,
        borderRadius: 10
    },
    triangle: {
        marginLeft: 8,
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderTopWidth: 12,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: black,
    },
    modal: {
        paddingBottom: 50,
        flexShrink: 1,
        backgroundColor: white,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        shadowColor: black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 14,
        elevation: 15,
        padding: 15
    },
    radioButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 2,
        marginRight: 10
    },
    radioButtonOn: {
        height: 8,
        width: 8,
        borderRadius: 4,
        position: 'absolute',
        top: 3.5,
        left: 3.5,
        backgroundColor: 'grey',
    }
});

export default styles