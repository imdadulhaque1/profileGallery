import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

interface Props {}

const SignupScreen: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Signup Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textStyle: {
    fontSize: 18,
    color: '#111111',
  },
});

export default SignupScreen;
