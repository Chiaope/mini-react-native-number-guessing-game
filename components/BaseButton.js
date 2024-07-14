import { Pressable, StyleSheet, Text, View } from "react-native";

function BaseButton({ children }) {
    return (
        <View style={styles.baseButtonContainer}>
            <Pressable onPress={() => console.log('pressed')} style={styles.basePressableStyle}>
                <Text style={styles.textStyle}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default BaseButton

const styles = StyleSheet.create({
    baseButtonContainer: {
        flex: 1,
        backgroundColor: '#6bf589',
        padding: '2%',
        borderRadius: 6,
    },
    basePressableStyle: {
        flex: 1,
        justifyContent: 'center'
    },
    textStyle: {
        textAlign: 'center',
    }
});
