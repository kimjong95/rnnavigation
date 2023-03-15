import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import Home from './Home';
import Users from './Users';

export type RootStackParams = {
  Home: HomeStackParmas;
  Users: UsersStackParams;
};

export type HomeStackParmas = undefined;
export type HomeNavigationProps = NativeStackNavigationProp<RootStackParams, 'Home'>;
export type HomeRouteParams = RouteProp<RootStackParams, 'Home'>;

export type UsersStackParams = {
  id: number;
  codeName: string;
};
export type UsersNavigationProps = NativeStackNavigationProp<RootStackParams, 'Users'>;
export type UserRouteProps = RouteProp<RootStackParams, 'Users'>;

const Stack = createNativeStackNavigator<RootStackParams>();

export default function RootRouter() {
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
