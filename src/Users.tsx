import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackParams } from '../App';

export type UsersScreenProps = NativeStackScreenProps<RootStackParams, 'Users'>;

export default function Users({ navigation, route }: UsersScreenProps) {
  return (
    <View>
      <Text>Users: {route.params.codeName} </Text>
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
