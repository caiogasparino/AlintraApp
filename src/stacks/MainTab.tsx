import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {User, Notifications, Search, Alintra, News} from '~/screens';

import {ParamListBase, RouteProp, useRoute} from '@react-navigation/native';
import {TabBar} from '~/components/TabBar';

const Tab = createBottomTabNavigator();

export const BottomTabMenu = () => {
  const route: RouteProp<keyof ParamListBase[string]> = useRoute();

  const routeTo = route.params
    ? route.params['routeTo' as keyof ParamListBase[string]]
    : 'Home';

  return (
    <Tab.Navigator
      initialRouteName={routeTo || ''}
      screenOptions={{
        headerShown: false,
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Alintra" component={Alintra} />
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};
