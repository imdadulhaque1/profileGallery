import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import SignupScreen from '@views/auth/SignupScreen';

interface Props {}

const App: FC<Props> = props => {
  return <SignupScreen />;
};

export default App;
