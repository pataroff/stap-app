import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  TextStyle,
  Dimensions,
} from 'react-native';

import { Fonts } from '../styles';

import { Header } from '../components/Header';
import { Performance } from '../components/Performance';

export const DashboardScreen: React.FC = () => {
  return (
    <>
      <StatusBar />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyles}
      >
        <Header />
        <Performance />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyles: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
  },
});
