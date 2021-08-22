import React from 'react';
import { Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Message } from '../store/useMessages';

interface Props {
	message: Message;
	color: 'red' | 'indigo';
}

export function ChatMessage({ message, color }: Props) {
	return (
		<Text style={tw`flex-row py-1`}>
			<Text style={tw`text-${color}-500 text-lg`}>{message.user}: </Text>
			<Text style={tw`text-white text-base`}>{message.text}</Text>
		</Text>
	);
}
