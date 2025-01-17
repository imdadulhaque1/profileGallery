import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import Container from '@components/Container';

interface Props {}

const DashboardScreen: FC<Props> = props => {
  return (
    <Container>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Welcome to My Profile</Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    color: '#111111',
    fontFamily: 'PlaywriteIS-Regular',
    textAlign: 'center',
  },
});

export default DashboardScreen;
