import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// Based on iphone 5s's scale
const wscale: number = SCREEN_WIDTH / 320;
const hscale: number = SCREEN_HEIGHT / 568;

export const Normalize = (
  size: number,
  based: 'width' | 'height' = 'width',
): number => {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    if (size === 0) {
      return 0;
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
};

export const ScreenWidth = SCREEN_WIDTH;

export const ScreenHeight = SCREEN_HEIGHT;
