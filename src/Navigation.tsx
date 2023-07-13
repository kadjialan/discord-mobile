import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chats from './screens/chats/Chats';
import Contact from './screens/contacts/Contact';

const Tab = createBottomTabNavigator();

 export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Chats}  options={{ headerShown: false }}/>
      <Tab.Screen name="Settings" component={Contact} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}