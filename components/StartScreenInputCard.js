import { StyleSheet, TextInput, View } from "react-native";
import BaseButton from "./BaseButton";

function StartScreenInputCard() {
    return (
        <View style={styles.startScreenInputCardContainer}>
            <TextInput placeholder="Enter Number" style={styles.textInputStyle}/>
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
        borderRadius: 8,
        backgroundColor: '#6c6aff',
        padding: '2%',
    },
    textInputStyle: {
        borderBottomWidth: 1,
        // padding: '2%',
        margin: '3%',
        fontSize: 30
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        flex: 1,
        paddingVertical: '2%',
        paddingHorizontal: '2%',
    }
});
