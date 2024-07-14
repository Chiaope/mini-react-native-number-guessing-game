import { StyleSheet, View } from "react-native"
import StartScreenInputCard from "../components/StartScreenInputCard"

function StartGameScreen() {
    return (
        <View style={styles.startScreenContainer}>
            <View style={styles.startScreenInputCardContainer}>
                <StartScreenInputCard />
            </View>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    startScreenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    startScreenInputCardContainer: {
        width: '80%',
        height: '20%',
        justifyContent: 'center',
    }
});
