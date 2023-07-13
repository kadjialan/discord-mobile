import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/login/Login";
import Chats from "./src/screens/chats/Chats";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./firebase /firebase";
import { Text } from 'react-native';
import MyTabs from "./src/Navigation";

const Stake = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen
        name="chats"
        component={MyTabs}
        options={{ headerShown: false }}
      />
    </InsideStack.Navigator>
  );
}

export default function App(): any {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user", user);
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stake.Navigator initialRouteName="Login">
        {user ? (
          <>
            <Stake.Screen
              name="messages"
              component={InsideLayout}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <Stake.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        )}
      </Stake.Navigator>
    </NavigationContainer>
  );
}
