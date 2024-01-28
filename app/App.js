import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import StackNavigator from './StackNavigator.js';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}
