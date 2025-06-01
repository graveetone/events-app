import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native"
import { useLayoutEffect } from 'react'
import { HeaderBackButton } from "@react-navigation/elements"

export default function ProfileDetailScreen() {
    const navigation = useNavigation()
    const route = useRoute()
    const { profile } = route.params

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: `Profile ${profile.id}`,
            headerLeft: () => (
                <HeaderBackButton
                    tintColor="white"
                    label="Back"
                    onPress={() => navigation.goBack()}
                />
            )
        })
    }, [])

    return (
        <View style={styles.screen}>
            <Text style={{fontSize: 20}}>
                This is the profile {profile.id} Detail Screen
                {profile.title}
                {profile.description}
            </Text>
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