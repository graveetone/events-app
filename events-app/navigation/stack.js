import { createStackNavigator } from '@react-navigation/stack';
import { HomeTabs } from './tabs';
import EventDetailScreen from '../screens/event-detail-screen'
import { navOptions } from "./options"
import { useNavigation } from "@react-navigation/native"
import ProfileDetailScreen from '../screens/profiles/profile-detail-screen';
import ProfilesScreen from '../screens/profiles/profiles-screen';

const Stack = createStackNavigator();
 
export function HomeStack() {
    const navigation = useNavigation();
    return (
    <Stack.Navigator screenOptions={navOptions(navigation)}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Event" component={EventDetailScreen} />
    </Stack.Navigator>
  );
}

export function ProfileStack() {
    const navigation = useNavigation();
    return (
    <Stack.Navigator screenOptions={navOptions(navigation)}>
      <Stack.Screen name="Profiles" component={ProfilesScreen} />
      <Stack.Screen name="Profile" component={ProfileDetailScreen} />
    </Stack.Navigator>
  );
}

