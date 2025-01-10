import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  name: string;
  size: any;
  color: string;
  onPress?: () => void;
  containerStyle?: any;
}

const MCIcons: FC<Props> = props => {
  return (
    <Pressable onPress={props.onPress} style={props.containerStyle}>
      <Icon name={props.name} size={props.size} color={props.color} />
    </Pressable>
  );
};

export default MCIcons;
