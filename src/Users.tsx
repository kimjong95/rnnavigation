import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { UsersNavigationProps, UserRouteProps } from './RootRouter';

export default function Users() {
  //
  const navigation = useNavigation<UsersNavigationProps>();
  const route = useRoute<UserRouteProps>();

  return (
    <View>
      <Text>Users: {route.params?.codeName} </Text>
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
