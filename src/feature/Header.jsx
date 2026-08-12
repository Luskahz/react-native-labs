import { Image, Text, View } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Header({ showHome = false }) {
  return (
    <View className="h-[100px] w-full flex-row items-center gap-4 bg-[#345678] px-5">
      <ProfileIcon url={'https://avatars.githubusercontent.com/u/167643716?v=4'} />
      <SiteName name={'Site Legal'}/>
      

      <View className="min-h-[50px] flex-[3] items-end justify-center overflow-hidden rounded-xl bg-[#415a74] p-2.5">
        {showHome ? (
          <Entypo
            name="home"
            size={24}
            color="#fff"
            onPress={() => router.navigate('/')}
          />
        ) : (
          <MaterialIcons
            name="perm-contact-cal"
            size={24}
            color="#fff"
            onPress={() => router.navigate('/contact')}
          />
        )}
      </View>
    </View>
  );
}

export function ProfileIcon({ url }) {
  return (
    <Image
      source={{
        uri: url,
      }}
      className="h-[72px] w-[72px] rounded-full border-2 border-[#dbe7f3]"
      resizeMode="cover"
    />
  );
}

export function SiteName({name}) {
  return (
    <Text className="text-[28px] font-semibold text-[#f4f7fa]">
        {name}
      </Text>

  )
}

export function headerNavegateIcons({}){
  

}
