import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Preload, News} from '~/screens';
import {Transition} from './transition';
import {BottomTabMenu} from './MainTab';

const Stack = createStackNavigator();

interface IScreenRoutes {
  initialRouteName?: string;
  routeToBottomTabMenu?: string;
}

export default (props: IScreenRoutes) => {
  const {routeToBottomTabMenu} = props;
  const screenOptions = {
    headerShown: false,
    ...Transition,
  };

  const screens = [
    {name: 'Preload', component: Preload},
    {name: 'News', component: News},
    {name: 'User', component: News},
    {name: 'Notifications', component: News},
    {name: 'Search', component: News},
    {name: 'Alintra', component: News},
  ];

  const routeTo = routeToBottomTabMenu ? routeToBottomTabMenu : '';

  return (
    <Stack.Navigator initialRouteName="Preload" screenOptions={screenOptions}>
      {screens.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
      <Stack.Screen
        options={{headerShown: false}}
        name="BottomTabMenu"
        component={BottomTabMenu}
        initialParams={{routeTo}}
      />
    </Stack.Navigator>
  );
};
