import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ChatScreen } from '../screens/ChatScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { RootStackScreens } from './RootStackScreens';

const RootStack = createStackNavigator();

export function RootNavigator() {
	return (
		<RootStack.Navigator
			initialRouteName={RootStackScreens.HomeScreen}
			screenOptions={{ headerShown: false }}
		>
			<RootStack.Screen name={RootStackScreens.HomeScreen} component={HomeScreen} />
			<RootStack.Screen name={RootStackScreens.ChatScreen} component={ChatScreen} />
		</RootStack.Navigator>
	);
}
