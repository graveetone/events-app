import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"

const EventItem = ({item}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Event", {event: item})}    
        >
            <View>

                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
            </View>
            <Image source={{uri: item.qr_code}} style={{width:100, height: 100}} />
        </TouchableOpacity>
    )
}

export default EventItem;


const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        marginVertical: 5,
        padding: 30,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: "row"
    }
})