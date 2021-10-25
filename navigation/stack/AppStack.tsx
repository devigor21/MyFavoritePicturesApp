import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabBar from '../tabs/TabBar';
import {Picture} from '../../screens/Picture';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={TabBar} />
      <Stack.Screen name="Picture" component={Picture} />
    </Stack.Navigator>
  );
}
