import { StyleSheet, TextInput, View } from "react-native";
import BaseButton from "./BaseButton";

function StartScreenInputCard() {
    return (
        <View style={styles.startScreenInputCardContainer}>
            <TextInput placeholder="Enter Number" style={styles.textInputStyle} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <BaseButton>Confirm</BaseButton>
                </View>
                <View style={styles.buttonContainer}>
                    <BaseButton>Reset</BaseButton>
                </View>
            </View>

        </View>
    )
}

export default StartScreenInputCard

const styles = StyleSheet.create({
    startScreenInputCardContainer: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: '#6c6aff',
        padding: '2%',
    },
    textInputStyle: {
        flex: 1,
        borderBottomWidth: 1,
        margin: '3%',
        fontSize: 30
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        flex: 1,
        paddingVertical: '2%',
        paddingHorizontal: '2%',
    }
});
