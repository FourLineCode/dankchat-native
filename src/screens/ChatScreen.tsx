import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

interface Props extends ParamListBase {
	ChatScreen: { channelName: string };
}

export function ChatScreen({ route }: StackScreenProps<Props, 'ChatScreen'>) {
	const navigation = useNavigation() as any;
	const channelName = route.params.channelName;
	const [messageInput, setMessageInput] = useState('');

	const sendMessage = () => {
		console.log('Send Message:', messageInput);
		setMessageInput('');
	};

	return (
		<SafeAreaView style={tw`flex-1 bg-gray-800`}>
			<StatusBar style='light' />
			<View style={tw`h-16 p-4 w-full bg-gray-900 flex-row justify-between items-center`}>
				<Text style={tw`text-gray-300 text-2xl font-semibold`}>
					{channelName.toUpperCase()}
				</Text>
				<TouchableOpacity>
					<MaterialCommunityIcons name='menu-down' size={32} color='white' />
				</TouchableOpacity>
			</View>
			<View style={tw`flex-1`}>
				<ScrollView style={tw`flex-1 px-2`}>
					{Array.from({ length: 10 }).map(() => (
						<>
							<Text style={tw`flex-row py-1`}>
								<Text style={tw`text-indigo-500 text-lg`}>username: </Text>
								<Text style={tw`text-white text-base`}>
									this is their long ass messages. this is their long ass
									messages.
								</Text>
							</Text>
							<Text style={tw`flex-row py-1`}>
								<Text style={tw`text-red-500 text-lg`}>username: </Text>
								<Text style={tw`text-white text-base`}>
									this is their long ass messages. this is their long ass
									messages.
								</Text>
							</Text>
						</>
					))}
				</ScrollView>
				<View style={tw`p-2 w-full flex-row justify-end items-center`}>
					<TextInput
						value={messageInput}
						onChangeText={setMessageInput}
						placeholder='Send a message...'
						placeholderTextColor='gray'
						style={tw`flex-1 relative py-3 pl-3 pr-10 rounded-lg border border-gray-500 text-white text-lg`}
						spellCheck={false}
						autoCorrect={false}
					/>
					<TouchableOpacity
						onPress={sendMessage}
						disabled={!messageInput.length}
						style={tw`absolute p-6 justify-center items-center`}
					>
						<Ionicons
							name='send'
							size={20}
							color={!messageInput.length ? 'gray' : 'white'}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}
