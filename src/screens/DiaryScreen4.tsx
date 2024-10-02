import { StyleSheet, View, ScrollView } from 'react-native';
import { DiaryFarewell } from '../components/DiaryFarewell';

export const DiaryScreen4: React.FC = () => {
  return (
    <>
      <ScrollView
        bounces={false}
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyles}
      >
        <DiaryFarewell />
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
