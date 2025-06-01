import  { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home-screen";
import QrCodeScreen from "../screens/qr-code-screen"
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
    return (
        <Tab.Navigator screenOptions={route => ({headerShown: false, tabBarShowLabel: false, tabBarStyle: {backgroundColor: "black"}, tabBarActiveTintColor: "yellow", tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.route.name == "HomeTab") {
                iconName = focused ? "home" : "home-outline"
            }
            else if (route.route.name == "QrCodeScreen") {
                iconName = focused ? "qr-code" : "qr-code-outline"
            }

            return <Ionicons name={iconName} size={focused ? 35 : size} color={color}/>
        }})}>
            <Tab.Screen name="HomeTab" component={HomeScreen} />
            <Tab.Screen name="QrCodeScreen" component={QrCodeScreen} />
        </Tab.Navigator>
    )
}
