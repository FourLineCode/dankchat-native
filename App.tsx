import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './src/navigators/RootNavigator';

export default function App() {
	return (
		<SafeAreaProvider>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={{ flex: 1 }}
			>
				<NavigationContainer>
					<RootNavigator />
				</NavigationContainer>
			</KeyboardAvoidingView>
		</SafeAreaProvider>
	);
}
