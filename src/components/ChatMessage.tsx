import React from 'react';
import { Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Message } from '../store/useMessages';

interface Props {
	message: Message;
}

export function ChatMessage({ message }: Props) {
	return (
		<Text style={tw`flex-row items-center py-1`}>
			<Text
				style={tw.style('text-lg font-semibold', {
					color: message.tags.color ?? tw.color('gray-500')!,
				})}
			>
				{message.tags['display-name']}:{' '}
			</Text>
			<Text style={tw`text-base text-white`}>{message.text}</Text>
		</Text>
	);
}
