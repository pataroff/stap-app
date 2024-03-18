import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { DiaryGreeting } from '../components/DiaryGreeting';

export const DiaryScreen: React.FC = ({ navigation }) => {
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Header />
        <DiaryGreeting navigation={navigation} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});