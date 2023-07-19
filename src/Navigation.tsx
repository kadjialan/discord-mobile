import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chats from "./screens/chats/Chats";
import Contact from "./screens/contacts/Contact";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Chats}
        options={{
           headerShown: false, 
          tabBarIcon: () => (
            <MaterialCommunityIcons name="discord" color='#edede996' size={20}/>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Contact}
        options={{
          headerShown: false, 
         tabBarIcon: () => (
           <Ionicons name="notifications" color='#edede996' size={20}/>
         ),
       }}
      />
    </Tab.Navigator>
  );
}
