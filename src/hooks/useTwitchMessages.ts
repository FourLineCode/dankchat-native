import { useEffect } from 'react';
import tmi from 'tmi.js';
import { useMessageStore } from '../store/useMessages';

export function useTwitchMessages(channelName: string) {
	const { messages, addMessage, clearMessages } = useMessageStore();

	useEffect(() => {
		const client = new tmi.Client({
			channels: [channelName],
		});

		client.connect();

		client.on('message', (_channel, tags, message, _self) => {
			addMessage({
				id: tags.id!,
				text: message,
				tags: tags,
			});
		});

		return () => {
			client.disconnect();
			clearMessages();
		};
	}, []);

	return { messages };
}
