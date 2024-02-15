import React, {memo, useEffect, useRef} from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';

import {palette} from '~/utils/colors';
import {Icon} from '../Icons';
import {Normalize, ScreenWidth} from '~/utils/NormalizePixel';
import {Logo} from '~/assets';

interface IStatic extends BottomTabBarProps {
  value: Animated.Value;
}

const icons: {[key: string]: string} = {
  Alintra: 'planet',
  Search: 'search',
  User: 'person',
  Notifications: 'notifications',
  News: 'newspaper',
};

export const StaticTabBar = memo((props: IStatic) => {
  const {state, navigation, value} = props;
  const width = ScreenWidth;
  const tabWidth = width / state.routes.length;

  const values = useRef(
    state.routes.map((tab, index) => new Animated.Value(index === 0 ? 1 : 0)),
  ).current;

  const tabItems: any = [];

  useEffect(() => {
    onAnimation(state.index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const onAnimation = (key: number) => {
    const isFocused = state.index === key;
    const event = navigation.emit({
      canPreventDefault: true,
      target: state.routes[key].key,
      type: 'tabPress',
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(state.routes[key].name, {reload: true});
    }

    Animated.sequence([
      Animated.parallel(
        values.map(v =>
          Animated.timing(v, {
            duration: 0,
            toValue: 0,
            useNativeDriver: true,
          }),
        ),
      ),
      Animated.parallel([
        Animated.spring(value, {
          toValue: tabWidth * key,
          useNativeDriver: true,
        }),
        Animated.spring(values[key], {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  state.routes.map((route, key) => {
    const tabW = width / state.routes.length;
    const cursor = tabWidth * key;
    const opacity = value.interpolate({
      extrapolate: 'clamp',
      inputRange: [cursor - tabW, cursor, cursor + tabW],
      outputRange: [1, 0, 1],
    });
    const translateY = values[key].interpolate({
      extrapolate: 'clamp',
      inputRange: [0, 1],
      outputRange: [64, 0],
    });
    const opacity1 = values[key].interpolate({
      extrapolate: 'clamp',
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    const items = (
      <React.Fragment {...{key}}>
        <TouchableWithoutFeedback onPress={() => onAnimation(key)}>
          <Animated.View style={[styles.tab, {opacity}]}>
            {(key as number) === 0 ? (
              <Logo width={24} height={24} />
            ) : (
              <>
                <Icon
                  name={icons[route.name]}
                  rotate={key === 2 ? '0deg' : '0deg'}
                  size={24}
                />
                {(key as number) === 1 && <View style={styles.view} />}
              </>
            )}
          </Animated.View>
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            ...styles.viewAnimated,
            left: tabWidth * key,
            opacity: opacity1,
            transform: [{translateY}],
            width: tabWidth,
          }}>
          <View style={styles.activeIcon}>
            {key === 0 ? (
              <Logo width={24} height={24} />
            ) : (
              <Icon
                name={icons[route.name]}
                rotate={key === 1 ? '0deg' : '0deg'} // Adjust rotation as needed
                size={24}
              />
            )}
          </View>
        </Animated.View>
      </React.Fragment>
    );
    tabItems.push(items);
  });

  return <View style={styles.container}>{tabItems}</View>;
});

const styles = StyleSheet.create({
  activeIcon: {
    alignItems: 'center',
    backgroundColor: '#2B1548',
    borderRadius: Normalize(42 / 2),
    height: Normalize(42),
    justifyContent: 'center',
    width: Normalize(42),
  },
  view: {
    backgroundColor: palette.white,
    borderRadius: Normalize(4 / 2),
    bottom: Normalize(4),
    height: Normalize(4),
    position: 'absolute',
    width: Normalize(4),
  },
  viewAnimated: {
    alignItems: 'center',
    height: 4,
    justifyContent: 'center',
    position: 'absolute',
    top: 15,
  },
  container: {
    flexDirection: 'row',
  },
  tab: {
    alignItems: 'center',
    flex: 1,
    height: 64,
    justifyContent: 'center',
  },
});
