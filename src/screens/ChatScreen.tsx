import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { ParamListBase } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import { ChatView } from '../components/ChatView';
import MessageInput from '../components/MessageInput';
import { RootStackScreens } from '../navigators/RootStackScreens';

interface Props extends ParamListBase {
	ChatScreen: { channelName: string };
}

export function ChatScreen({ navigation, route }: StackScreenProps<Props, 'ChatScreen'>) {
	const channelName = route.params.channelName;

	return (
		<SafeAreaView style={tw`flex-1 bg-gray-800`}>
			<StatusBar style='light' />
			<View style={tw`flex-row items-center justify-between w-full h-16 p-4 bg-gray-900`}>
				<TouchableOpacity
					onPress={() => navigation.replace(RootStackScreens.HomeScreen)}
					style={tw`flex-row items-center`}
				>
					<Feather name='edit' size={20} color={tw.color('gray-500')} />
					<Text style={tw`ml-2 text-2xl font-semibold text-gray-300`}>
						{channelName.toUpperCase()}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<MaterialCommunityIcons name='menu-down' size={32} color='white' />
				</TouchableOpacity>
			</View>
			<View style={tw`flex-1`}>
				<ChatView channelName={channelName} />
				<MessageInput />
			</View>
		</SafeAreaView>
	);
}
