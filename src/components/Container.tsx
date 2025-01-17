import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '@utils/COLORS';
import MyStatusBar from './statusbar/MyStatusBar';

interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = props => {
  return (
    <SafeAreaView style={styles.container}>
      <MyStatusBar
        barStyle={COLORS.primaryLight90}
        backgroundColor={COLORS.primaryLight90}
        translucent={Platform.OS === 'ios'}
      />
      <View>
        <Text style={styles.textStyle}>Container</Text>
        {props.children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryLight90,
    paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight || 20 : 0,
  },
  textStyle: {
    fontSize: 18,
    color: COLORS.black,
  },
});

export default Container;
