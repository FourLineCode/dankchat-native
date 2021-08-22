import create from 'zustand';

export interface Message {
	id: string;
	user: string;
	text: string;
}

interface MessageState {
	messages: Message[];
	addMessage: (message: Omit<Message, 'id'>) => void;
}

let currentId = 15;

export const useMessages = create<MessageState>((set) => ({
	messages: Array.from({ length: 15 }).map((_, index) => ({
		id: index.toString(),
		user: 'username',
		text: 'This is a long message. This message is coming from zustand store.',
	})),
	addMessage: (message) => {
		set((state) => ({
			...state,
			messages: [...state.messages, { id: String(currentId++), ...message }],
		}));
	},
}));
