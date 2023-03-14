import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackParams } from '../App';

export type UsersScreenProps = NativeStackScreenProps<RootStackParams, 'Home'>;

export default function Home({ navigation }: UsersScreenProps) {
  //

  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to Users" onPress={() => navigation.navigate('Users')} />
    </View>
  );
}
