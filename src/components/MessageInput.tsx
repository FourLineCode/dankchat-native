import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useMessages } from '../store/useMessages';

export default function MessageInput() {
	const { addMessage } = useMessages();
	const [messageInput, setMessageInput] = useState('');

	const sendMessage = () => {
		addMessage({ user: 'Admin', text: messageInput });
		setMessageInput('');
	};

	return (
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
				<Ionicons name='send' size={20} color={!messageInput.length ? 'gray' : 'white'} />
			</TouchableOpacity>
		</View>
	);
}
