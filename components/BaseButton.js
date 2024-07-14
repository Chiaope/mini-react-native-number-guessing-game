import { Pressable, StyleSheet, Text, View } from "react-native";

function BaseButton({ children }) {
    return (
        <View style={styles.baseButtonStyle}>
            <Pressable onPress={() => console.log('pressed')}>
                <Text style={styles.textStyle}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default BaseButton

const styles = StyleSheet.create({
    baseButtonStyle: {
        backgroundColor: '#6bf589',
        padding: '2%',
        borderRadius: 6,
    },
    textStyle: {
        textAlign: 'center',
    }
});
