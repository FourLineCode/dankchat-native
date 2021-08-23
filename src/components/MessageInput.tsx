import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function MessageInput() {
	// const { addMessage } = useMessages();
	const [messageInput, setMessageInput] = useState('');

	const sendMessage = () => {
		// addMessage({ user: 'Admin', text: messageInput });
		setMessageInput('');
	};

	return (
		<View style={tw`flex-row items-center justify-end w-full p-2`}>
			<TextInput
				value={messageInput}
				onChangeText={setMessageInput}
				placeholder='Send a message...'
				placeholderTextColor='gray'
				style={tw`relative flex-1 py-3 pl-3 pr-10 text-lg text-white border border-gray-500 rounded-lg`}
				spellCheck={false}
				autoCorrect={false}
			/>
			<TouchableOpacity
				// onPress={sendMessage}
				disabled={!messageInput.length}
				style={tw`absolute items-center justify-center p-6`}
			>
				<Ionicons name='send' size={20} color={!messageInput.length ? 'gray' : 'white'} />
			</TouchableOpacity>
		</View>
	);
}
