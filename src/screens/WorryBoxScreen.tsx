import React, { useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { WorryDrawer } from '../components/WorryDrawer';

// @TODO Correct the `route` type annotation!
export const WorryBoxScreen: React.FC<{ route: any }> = ({ route }) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerTitle: 'Zorgenbakje' });
  }, [navigation]);

  return (
    <>
      <StatusBar />
      <ScrollView
        bounces={false}
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyles}
      >
        <WorryDrawer route={route} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainerStyles: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
  },
});
