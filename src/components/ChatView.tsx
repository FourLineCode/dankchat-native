import React, { useCallback, useMemo, useRef } from 'react';
import { FlatList } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useTwitchMessages } from '../hooks/useTwitchMessages';
import { Message } from '../store/useMessages';
import { ChatMessage } from './ChatMessage';

interface Props {
	channelName: string;
}

export function ChatView({ channelName }: Props) {
	const { messages } = useTwitchMessages(channelName);
	const listRef = useRef<FlatList>(null);

	const renderChatMessage = ({ item }: { item: Message }) => <ChatMessage message={item} />;

	const memo = useMemo(() => renderChatMessage, [messages]);

	const scrollToBottom = useCallback(() => {
		// listRef.current?.scrollToEnd({ animated: false });
	}, []);

	return (
		<FlatList
			ref={listRef}
			style={tw`flex-1 px-2`}
			data={messages}
			keyExtractor={(item) => item.id}
			renderItem={memo}
			onContentSizeChange={scrollToBottom}
		/>
	);
}
