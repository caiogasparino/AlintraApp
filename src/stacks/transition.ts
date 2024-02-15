import {StackNavigationOptions} from '@react-navigation/stack';
import {TransitionSpec} from '@react-navigation/stack/lib/typescript/src/types';

const config: TransitionSpec = {
  animation: 'spring',
  config: {
    damping: 10,
    overshootClamping: true,
    restDisplacementThreshold: 0.0001,
    restSpeedThreshold: 0.0001,
    stiffness: 45,
  },
};

export const Transition: StackNavigationOptions = {
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        opacity:
          next &&
          next.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            translateX: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -layouts.screen.width / 5],
                })
              : 0,
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        backgroundColor: 'transparent',
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
    };
  },
  gestureDirection: 'horizontal',
  transitionSpec: {
    close: config,
    open: config,
  },
};
