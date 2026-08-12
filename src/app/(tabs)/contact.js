import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Header from '../../feature/Header';

export default function App() {
  return (
    <View className="flex-1 bg-[#a7bcd1]">
      <Header showHome />
      <StatusBar style="light" />
      <ScrollView
        className="flex-1"
        contentContainerClassName="w-full items-center p-[30px]"
      >
        <View className="min-h-[260px] w-full flex-col gap-2.5 rounded-2xl bg-[#e3edf7] p-2.5 shadow-lg shadow-[#1d354b] wide:flex-row">
          <View className="min-h-[210px] w-full flex-1 items-center justify-center rounded-xl bg-[#c4d0db] p-5 wide:min-h-[240px] wide:w-auto">
            <Image
              source={{
                uri: 'https://avatars.githubusercontent.com/u/167643716?v=4',
              }}
              className="h-[120px] w-[120px] rounded-full border-4 border-white wide:h-[150px] wide:w-[150px]"
              resizeMode="cover"
            />

            <Text className="mt-3 text-[20px] font-bold text-[#24384a]">
              Luskahz
            </Text>
            <Text className="mt-0.5 text-[14px] text-[#607487]">
              Desenvolvedor
            </Text>
          </View>

          <View className="min-h-[240px] flex-[3] overflow-hidden rounded-xl bg-[#f4f8fc]">
            <View className="min-h-[58px] flex-row items-center justify-between bg-[#4f84b6] px-5">
              <Text className="text-[18px] font-semibold text-white">
                Informações do usuário
              </Text>

              <FontAwesome
                name="user-circle"
                size={24}
                color="#ffffff"
              />
            </View>

            <View className="flex-1 gap-[18px] p-5">
              <View className="flex-row items-center gap-3.5">
                <FontAwesome name="github" size={22} color="#345678" />

                <View>
                  <Text className="text-[12px] font-semibold uppercase text-[#708395]">
                    GitHub
                  </Text>
                  <Text className="mt-0.5 text-[15px] text-[#24384a]">
                    github.com/Luskahz
                  </Text>
                </View>
              </View>

              <View className="flex-row items-center gap-3.5">
                <FontAwesome name="map-marker" size={22} color="#345678" />

                <View>
                  <Text className="text-[12px] font-semibold uppercase text-[#708395]">
                    Localização
                  </Text>
                  <Text className="mt-0.5 text-[15px] text-[#24384a]">
                    Caraguatatuba, São Paulo
                  </Text>
                </View>
              </View>

              <View className="flex-row items-center gap-3.5">
                <FontAwesome name="code" size={20} color="#345678" />

                <View>
                  <Text className="text-[12px] font-semibold uppercase text-[#708395]">
                    Área
                  </Text>
                  <Text className="mt-0.5 text-[15px] text-[#24384a]">
                    Análise e Desenvolvimento de Sistemas
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
