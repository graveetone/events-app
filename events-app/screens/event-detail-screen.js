import { View, Text, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native"
import { useLayoutEffect } from 'react'
import { HeaderBackButton } from "@react-navigation/elements"

export default function EventDetailScreen() {
    const navigation = useNavigation()
    const route = useRoute()
    const { event } = route.params

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: `Event ${event.id}`,
            headerLeft: () => (
                <HeaderBackButton
                    tintColor="white"
                    label="Back"
                    onPress={() => navigation.goBack()}
                />
            )
        })
    }, [])
    console.log(event.qr_code)
    return (
        <View style={styles.screen}>
            <Text style={{fontSize: 20}}>
                This is the Event {event.id} Detail Screen
            </Text>
            <Text style={{fontSize: 20}}>
                {event.title}
            </Text>
            <Text style={{fontSize: 20}}>
                {event.description}
            </Text>
            <Text style={{fontSize: 20}}>
                {event.date}
            </Text>
            <Image source={{uri: event.qr_code}} style={{width:100, height: 100}} />
            <Button title="Go home" onPress={() => {
                navigation.navigate("Home")
            }}>
                
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        justifyContent: 'center',
        alignItems: "center"
    }
})