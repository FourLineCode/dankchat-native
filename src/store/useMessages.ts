import tmi from 'tmi.js';
import create from 'zustand';
export interface Message {
	id: string;
	tags: tmi.ChatUserstate;
	text: string;
}

interface MessageState {
	messages: Message[];
	addMessage: (message: Message) => void;
	clearMessages: () => void;
}

const MAX_MESSAGE_LENGTH = 100;

export const useMessageStore = create<MessageState>((setState, getState) => ({
	messages: [],
	addMessage: (message) => {
		const currentMessages = getState().messages;
		currentMessages.push(message);

		if (currentMessages.length > MAX_MESSAGE_LENGTH) {
			currentMessages.shift();
		}

		setState((state) => ({
			...state,
			messages: currentMessages,
		}));
	},
	clearMessages: () => {
		setState((state) => ({ ...state, messages: [] }));
	},
}));
