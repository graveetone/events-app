import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native'
import { useNavigation } from "@react-navigation/native"

import EventList from "../components/events/event-list"
import { useState, useEffect } from 'react'

export default function HomeScreen() {
    const navigation = useNavigation()
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch(
                "http://127.0.0.1:8000/api/events/"
        )
        const data = await response.json()
        setEvents(data)
    }
    return (
        <View style={styles.screen}>
            <Text>
                This is the Home Screen
            </Text>
            <EventList data={events}/>
            <Button title="Move to detail" onPress={() => {
                navigation.navigate("Event")
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