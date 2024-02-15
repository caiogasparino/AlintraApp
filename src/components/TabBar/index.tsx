import React, {memo, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {Normalize, ScreenWidth} from '~/utils/NormalizePixel';
import * as shape from 'd3-shape';
import Svg, {Path} from 'react-native-svg';
import {StaticTabBar} from '../StaticTabBar';
import {palette} from '~/utils/colors';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

export const TabBar = memo((props: BottomTabBarProps) => {
  const {state} = props as BottomTabBarProps;
  const height = Normalize(60);
  const width = ScreenWidth;
  const AnimatedSvg = Animated.createAnimatedComponent(Svg);

  const tabWidth = width / state.routes.length;

  type Point = {x: number; y: number};

  const getPath = () => {
    const left = shape
      .line<Point>()
      .x(d => d.x)
      .y(d => d.y)([
      {x: 0, y: 0},
      {x: width, y: 0},
    ]);
    const tab = shape
      .line<Point>()
      .x(d => d.x)
      .y(d => d.y)
      .curve(shape.curveBasis)([
      {x: width, y: 0},
      {x: Normalize(250), y: 0},
      {x: width + Normalize(-15), y: Normalize(-5)},
      {x: width + Normalize(10), y: Normalize(38)},
      {x: width + tabWidth - Normalize(10), y: Normalize(38)},
      {x: width + tabWidth - Normalize(-15), y: Normalize(-5)},
      {x: Normalize(450), y: 0},
      {x: width + tabWidth, y: 0},
    ]);
    const right = shape
      .line<Point>()
      .x(d => d.x)
      .y(d => d.y)([
      {x: width + tabWidth, y: 0},
      {x: width * 2.5, y: 0},
      {x: width * 2.5, y: height},
      {x: 0, y: height},
      {x: 0, y: 0},
    ]);
    return `${left} ${tab} ${right}`;
  };
  const d = getPath();
  const value = useRef(new Animated.Value(0)).current;
  const translateX = value.interpolate({
    inputRange: [0, width],
    outputRange: [-width, 0],
  });

  if (state.index === 0) {
    value.setValue(0);
  }

  return (
    <View style={styles.container}>
      <AnimatedSvg
        width={width * 2.5}
        {...{height}}
        style={{transform: [{translateX}]}}>
        <Path d={d} fill={palette.lighter1} />
      </AnimatedSvg>
      <View style={StyleSheet.absoluteFill}>
        <StaticTabBar {...{value}} {...props} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    height: Normalize(60),
  },
});
