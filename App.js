import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, Text} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <View style={styles.logo}>
          <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/167643716?v=4',
          }}
          style={styles.image}
          resizeMode="contain"
          />
        </View>
        <View style={styles.title}>
          <Text style={styles.textTitle}>
            Site Legal
          </Text>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cdd7e0',
  },

  header: {
    width: '100%',
    height: 100,
    backgroundColor: '#345678',
    flexDirection: 'row',
    justifyContent: 'start',
  },

  logo:{
    width: 100,
    height: 100,
  },

  title:{
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },

  textTitle:{
    color: '#d3d2d2',
    fontSize: 30
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: '100%',
  },
});