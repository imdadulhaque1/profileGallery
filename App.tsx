import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import SignupScreen from '@views/auth/SignupScreen';
import SigninScreen from '@views/auth/SigninScreen';

interface Props {}

const App: FC<Props> = props => {
  return <SigninScreen />;
};

export default App;
