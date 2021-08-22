import React from 'react';
import { FlatList } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useMessages } from '../store/useMessages';
import { ChatMessage } from './ChatMessage';

export function ChatView() {
	const { messages, addMessage } = useMessages();

	return (
		<FlatList
			style={tw`flex-1 px-2`}
			data={messages}
			keyExtractor={(item) => item.id}
			renderItem={({ item, index }) => (
				<ChatMessage message={item} color={index % 2 == 0 ? 'red' : 'indigo'} />
			)}
		/>
	);
}
