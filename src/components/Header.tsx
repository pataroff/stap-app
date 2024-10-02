import { StatusBar } from 'expo-status-bar';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  TextStyle,
  Pressable,
  Dimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { Fonts } from '../styles';

import { Avatar } from 'react-native-paper';

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const windowHeight = Dimensions.get('window').height;

export const Header: React.FC<{ title: string; route?: any }> = ({
  title,
  route,
}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { user, signOut } = useContext(AuthContext);

  return (
    <>
      <StatusBar style='light' />
      {/* SafeAreaView */}
      <View
        style={{
          backgroundColor: route?.name == 'Toolkit1' ? '#F9F9F9' : '#ffffff',
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        {/* Main Container */}
        <View style={styles.container}>
          {/* Header Container */}
          <View style={styles.headerContainer}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 10,
              }}
            >
              {route?.params?.toolkitStackScreen &&
                route?.name !== 'Toolkit1' && (
                  <Pressable onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons
                      name='chevron-left-circle-outline'
                      size={28}
                      color='white'
                    />
                  </Pressable>
                )}
              {route?.name !== 'Home' ? (
                <Text style={styles.headerTitle}>{title}</Text>
              ) : (
                <Image
                  style={{
                    height: 80,
                    width: 80,
                  }}
                  resizeMode='contain'
                  source={require('../../assets/images/logo_releafe_white.png')}
                />
              )}
            </View>
            {/* TODO: Change this to a <View> component after testing phase! */}
            <Pressable onPress={() => signOut()}>
              <Avatar.Text
                style={{
                  backgroundColor: '#C1D6BA',
                  borderWidth: 2,
                  borderColor: 'white',
                }}
                color='white'
                size={56}
                label={user?.firstName[0] + user?.lastName[0]}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight <= 667 ? 145 : 165,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderTopWidth: 0,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    backgroundColor: '#C1D6BA',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: windowHeight <= 667 ? 20 : 40,
    paddingHorizontal: 30,
    alignItems: 'center',
    columnGap: 30,
    width: '100%',
  },
  headerTitle: {
    ...Fonts.poppinsSemiBold[Platform.OS],
    fontSize: 22,
    color: 'white',
    textAlign: 'left',
  } as TextStyle,
});
