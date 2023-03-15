import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigationProps } from './RootRouter';

export default function Home() {
  //
  const navigation = useNavigation<HomeNavigationProps>();

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Users"
        onPress={() =>
          navigation.navigate('Users', {
            id: 23,
            codeName: 'Black mamba',
          })
        }
      />
    </View>
  );
}
