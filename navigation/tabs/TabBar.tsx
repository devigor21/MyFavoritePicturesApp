import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Main} from '../../screens/Main';
import Gallery from '../../components/icons/Gallery';
import Favorite from '../../components/icons/Favorite';
import {FavoritePics} from '../../screens/FavoritePics';

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Галерея"
        component={Main}
        options={{
          tabBarIcon: ({focused}) => (
            <Gallery color={focused ? '#A10D99' : '#949494'} />
          ),
          tabBarActiveTintColor: '#A10D99',
          tabBarInactiveTintColor: '#949494',
        }}
      />
      <Tab.Screen
        name="Избранное"
        component={FavoritePics}
        options={{
          tabBarLabel: 'Избранное',
          tabBarIcon: ({focused}) => (
            <Favorite color={focused ? '#A10D99' : '#949494'} />
          ),
          tabBarActiveTintColor: '#A10D99',
          tabBarInactiveTintColor: '#949494',
        }}
      />
    </Tab.Navigator>
  );
}
