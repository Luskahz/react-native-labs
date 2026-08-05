import { StatusBar } from 'expo-status-bar';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';

export default function App() {
  const { width } = useWindowDimensions();
  const isMobile = width < 700;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/e8/1a/53/e81a530e7b6748e486ebd7d53edf2d1d.jpg',
          }}
          style={styles.headerImage}
          resizeMode="cover"
        />

        <Text style={styles.headerTitle}>Site Legal</Text>

        <View style={styles.headerIcons}>
          <Entypo
            name="home"
            size={24}
            color="#fff"
            onPress={() => router.navigate('/')}
          />

        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
      >
        <View
          style={[
            styles.cardUserContainer,
            isMobile && styles.cardUserContainerMobile,
          ]}
        >
          <View
            style={[
              styles.cardUserSideHeader,
              isMobile && styles.cardUserSideHeaderMobile,
            ]}
          >
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/e3/1b/f8/e31bf82adbfac6a2200381b87e29ef82.jpg',
              }}
              style={[
                styles.userImage,
                isMobile && styles.userImageMobile,
              ]}
              resizeMode="cover"
            />

            <Text style={styles.userName}>Luskahz</Text>
            <Text style={styles.userRole}>Desenvolvedor</Text>
          </View>

          <View style={styles.cardUserContent}>
            <View style={styles.cardUserHeader}>
              <Text style={styles.cardTitle}>Informações do usuário</Text>

              <FontAwesome
                name="user-circle"
                size={24}
                color="#ffffff"
              />
            </View>

            <View style={styles.userDetails}>
              <View style={styles.detailRow}>
                <FontAwesome
                  name="github"
                  size={22}
                  color="#345678"
                />

                <View>
                  <Text style={styles.detailLabel}>GitHub</Text>
                  <Text style={styles.detailValue}>github.com/Luskahz</Text>
                </View>
              </View>

              <View style={styles.detailRow}>
                <FontAwesome
                  name="map-marker"
                  size={22}
                  color="#345678"
                />

                <View>
                  <Text style={styles.detailLabel}>Localização</Text>
                  <Text style={styles.detailValue}>
                    Caraguatatuba, São Paulo
                  </Text>
                </View>
              </View>

              <View style={styles.detailRow}>
                <FontAwesome
                  name="code"
                  size={20}
                  color="#345678"
                />

                <View>
                  <Text style={styles.detailLabel}>Área</Text>
                  <Text style={styles.detailValue}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a7bcd1',
  },

  header: {
    width: '100%',
    height: 100,
    paddingHorizontal: 20,
    backgroundColor: '#345678',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  headerImage: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2,
    borderColor: '#dbe7f3',
  },


  headerTitle: {
    color: '#f4f7fa',
    fontSize: 28,
    fontWeight: '600',
  },

  headerIcons: {
    flex: 3,
    minHeight: 50,
    backgroundColor: '#415a74',
    justifyContent: 'center',
    padding: 10,
    alignItems: 'end',
    borderRadius: 12,
    overflow: 'hidden',
  },

  scroll: {
    flex: 1,
  },

  content: {
    width: '100%',
    padding: 30,
    alignItems: 'center',
  },

  cardUserContainer: {
    width: '100%',
    maxWidth: 1000,
    minHeight: 260,
    padding: 10,
    backgroundColor: '#e3edf7',
    borderRadius: 16,
    flexDirection: 'row',
    gap: 10,

    elevation: 5,
    shadowColor: '#1d354b',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  cardUserContainerMobile: {
    flexDirection: 'column',
  },

  cardUserSideHeader: {
    flex: 1,
    minHeight: 240,
    padding: 20,
    backgroundColor: '#c4d0db',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardUserSideHeaderMobile: {
    width: '100%',
    minHeight: 210,
  },

  userImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#ffffff',
  },

  userImageMobile: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  userName: {
    marginTop: 12,
    color: '#24384a',
    fontSize: 20,
    fontWeight: '700',
  },

  userRole: {
    marginTop: 2,
    color: '#607487',
    fontSize: 14,
  },

  cardUserContent: {
    flex: 3,
    minHeight: 240,
    backgroundColor: '#f4f8fc',
    borderRadius: 12,
    overflow: 'hidden',
  },

  cardUserHeader: {
    minHeight: 58,
    paddingHorizontal: 20,
    backgroundColor: '#4f84b6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  cardTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },

  userDetails: {
    flex: 1,
    padding: 20,
    gap: 18,
  },

  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  detailLabel: {
    color: '#708395',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },

  detailValue: {
    marginTop: 2,
    color: '#24384a',
    fontSize: 15,
  },
});