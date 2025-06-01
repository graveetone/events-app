import { Ionicons } from "@expo/vector-icons"
import { Text } from "react-native"

export const navOptions = navigation => {
    return {
        headerTintColor: "#cbd5e1",
        headerStyle: {
            backgroundColor: "#0f172a"
        },
        headerRight: () => (
            <Ionicons
            name="menu"
            size={32}
            marginRight={15}
            marginBottom={15}
            color="white"
            onPress={() =>navigation.toggleDrawer()}
            />
        ),
        headerLeft: () => (
            <Text style={{color: "white", paddingLeft: 5, fontSize: 20}}>
                LOGO
            </Text>
        )
    }
}