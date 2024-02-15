import React from 'react';
import {View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Normalize} from '~/utils/NormalizePixel';
import {palette} from '~/utils/colors';

Ionicons.loadFont();

interface IProps {
  library?: 'Ionicons' | 'MaterialIcons';
  name: string;
  size?: number;
  color?: string;
  children?: React.ReactNode;
  rotate?:
    | '-180deg'
    | '-90deg'
    | '-45deg'
    | '0deg'
    | '45deg'
    | '90deg'
    | '180deg';
}

export const Icon: React.FC<IProps> = (props: IProps) => {
  const {name, color, size, rotate, library, children} = props;
  const setSize = Normalize(size || 30);
  const setRotate = rotate || '0deg';
  const lib = library || 'Ionicons';
  return (
    <View style={{transform: [{rotate: setRotate}]}}>
      {lib === 'Ionicons' ? (
        <Ionicons
          name={name || 'ellipse'}
          size={setSize}
          color={color || palette.lighter2}
        />
      ) : (
        <MaterialIcons
          name={name || 'ellipse'}
          size={setSize}
          color={color || palette.lighter3}
        />
      )}
      {children}
    </View>
  );
};
