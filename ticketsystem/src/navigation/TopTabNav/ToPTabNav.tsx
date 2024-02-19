import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NewTicket, ProgressTicket, ResolvedTicket} from '../../screens';

const ToPNav = createMaterialTopTabNavigator();

export const ToPTabNav = () => {
  return (
    <ToPNav.Navigator>
      <ToPNav.Screen
        options={{tabBarLabel: 'New'}}
        name="NewTicket"
        component={NewTicket}
      />
      <ToPNav.Screen
        options={{tabBarLabel: 'In Progress'}}
        name="ProgressTicket"
        component={ProgressTicket}
      />
      <ToPNav.Screen
        options={{tabBarLabel: 'Resolved'}}
        name="ResolvedTicket"
        component={ResolvedTicket}
      />
    </ToPNav.Navigator>
  );
};

const styles = StyleSheet.create({});
