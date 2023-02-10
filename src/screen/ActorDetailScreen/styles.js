import { StyleSheet } from "react-native";
import { black, darkGray } from '../../constants/Color'
import { WIDTH, HEIGHT } from "../../constants/Layout";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: black
    },
    subContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    infoContainer: {
        bottom: 30,
        position: 'absolute',
        alignItems: 'flex-start',
        width: WIDTH - 40,
    },
    profilePicture: {
        width: WIDTH,
        height: HEIGHT,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    label: {
        flexShrink: 1,
        marginTop: 10,
        fontSize: 18,
        color: darkGray
    }
})

export default styles