import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  Notifications: undefined;
};

type NotificationsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Notifications'
>;

type NotificationsScreenRouteProp = RouteProp<
  RootStackParamList,
  'Notifications'
>;

export interface NotificationsScreenProps {
  navigation: NotificationsScreenNavigationProp | any;
  route: NotificationsScreenRouteProp | any;
}
