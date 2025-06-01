import { Button, View, Text, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/native"

// import EventList from "../components/events/event-list"

export default function ProfilesScreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.screen}>
            <Text>
                This is the Profiles Screen
            </Text>

            <Button title="Some profile" onPress={() => {
                navigation.navigate("Profile", {profile: {id: 1, title: "pr"}})
            }}>
                
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})