import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, TicketScreen} from '../../screens';
import Icon from 'react-native-vector-icons/AntDesign';
interface IconsProps {
  routeName: string;
  focused: boolean;
}

const Tab = createBottomTabNavigator();
const DisplayIcons = (props: IconsProps) => {
  const {routeName, focused} = props;

  let iconName;

  if (routeName === 'HomeScreen') {
    iconName = 'home';
  } else if (routeName === 'TicketScreen') {
    iconName = 'filetext1';
  }

  return (
    <Icon name={iconName} size={22} color={focused ? '#262626' : '#CCCC'} />
  );
};

export const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return <DisplayIcons routeName={route.name} focused={focused} />;
        },
      })}>
      <Tab.Screen
        options={{title: 'Ticket Request'}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{title: 'Tickets'}}
        name="TicketScreen"
        component={TicketScreen}
      />
    </Tab.Navigator>
  );
};
