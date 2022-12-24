import React, {ReactElement} from 'react';
import {View} from 'react-native';

interface ILayout {
  top?: ReactElement;
  mid?: ReactElement;
  bottom?: ReactElement;
}

export default function Layout(props: ILayout) {
  const {top, mid, bottom} = props;

  return (
    <View>
      <View>{top}</View>
      <View>{mid}</View>
      <View>{bottom}</View>
    </View>
  );
}
