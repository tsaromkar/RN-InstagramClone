import React from 'react';
import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';

interface IButton {
  label: string;
  buttonStyles?: ViewStyle;
  onButtonPress: () => void;
}

export default function Button(props: IButton) {
  const {label = '', buttonStyles = {}, onButtonPress = () => {}} = props;

  return (
    <Pressable style={[styles.button, buttonStyles]} onPress={onButtonPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ededed',
    borderRadius: 6,
    marginTop: 25,
    marginHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
  },
  buttonLabel: {
    fontWeight: '500',
    fontSize: 14,
    color: '#222',
  },
});
