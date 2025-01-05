import * as React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Icon name="rocket" size={30} color="#900" />
      <Button onPress={() => navigation.navigate('Notifications')}>
        shila aktar sumaia
      </Button>
    </View>
  );
}

function NotificationsScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontFamily: 'PlaywriteIS-Regular'}}>
        This is home Screen !
      </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator({
  screens: {
    Home: HomeScreen,
    Notifications: NotificationsScreen,
  },
});

const Navigation = createStaticNavigation(Drawer);

export default function App() {
  return <Navigation />;
}
