import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeStack, ProfileStack } from "./stack.js";
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{title: "Home"}} />
      <Drawer.Screen name="ProfileStack" component={ProfileStack} options={{title: "Profiles"}} />
      
    </Drawer.Navigator>
  );
}