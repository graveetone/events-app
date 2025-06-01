import { View, Text, StyleSheet } from "react-native";

const QrCodeScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Qr Code Scan</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }

})


export default QrCodeScreen;