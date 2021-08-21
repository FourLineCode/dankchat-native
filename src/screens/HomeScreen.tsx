import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import { RootStackScreens } from '../navigators/RootStackScreens';

export function HomeScreen() {
	const navigation = useNavigation() as any;
	const [channelName, setChannelName] = useState('');
	const [disableButton, setDisableButton] = useState(true);
	const [showInvalidMessage, setShowInvalidMessage] = useState(false);
	const channelNameRegex = /^[a-zA-Z0-9]{4,25}$/;

	useEffect(() => {
		setDisableButton(!channelNameRegex.test(channelName));
	}, [channelName]);

	useEffect(() => {
		setShowInvalidMessage(channelName.length >= 4 && disableButton);
	}, [disableButton, channelName]);

	return (
		<SafeAreaView style={tw`flex-1 bg-green-500 justify-center items-center p-6`}>
			<StatusBar style='light' />
			<Text style={tw`text-4xl font-bold text-gray-800`}>DankChat</Text>
			<View style={tw`my-4 w-full justify-center items-center`}>
				<TextInput
					value={channelName}
					onChangeText={setChannelName}
					placeholder='Channel name...(ex. sodapoppin)'
					style={tw`bg-white p-2 rounded-lg w-full`}
					spellCheck={false}
					autoCorrect={false}
				/>
				{showInvalidMessage && (
					<Text style={tw`text-red-500 font-semibold`}>Invalid channel name</Text>
				)}
			</View>
			<TouchableOpacity
				onPress={() => navigation.navigate(RootStackScreens.ChatScreen, { channelName })}
				disabled={disableButton}
				style={tw.style(
					'p-4 bg-gray-800 rounded-lg flex-row items-center',
					disableButton && 'bg-opacity-75'
				)}
			>
				<Text style={tw`text-white mr-2`}>Start chatting</Text>
				<Ionicons name='send' size={20} color='white' />
			</TouchableOpacity>
		</SafeAreaView>
	);
}
