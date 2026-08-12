import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Header from '../../feature/Header';

export default function App() {
  return (
    <View className="flex-1 bg-[#a7bcd1]">
      <Header>
      </Header>
      <StatusBar style="light" />
      <ScrollView
        className="flex-1"
        contentContainerClassName="w-full items-center p-[30px]"
      />
        

    </View>
  );
}
