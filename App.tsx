import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/Home';
import Users from './src/Users';

export type RootStackParams = {
  Home: undefined;
  Users: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  //
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Users" component={Users} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
