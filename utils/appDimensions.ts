import { Dimensions, Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { height, width } = Dimensions.get('window');
const deviceWidth = width;
const deviceHeight = height;

const useInsets = () => {
  const insets = useSafeAreaInsets();
  return {
    statusBar: Platform.select({
      ios: insets.top,
      android: StatusBar.currentHeight,
    }),
    top: insets.top,
    bottom: insets.bottom,
    bottomTab: insets.bottom > 0 ? insets.bottom : 10,
    fixedBottom: 30,
    paddingBottom: insets.bottom + 30,
  };
};


export {
  deviceWidth,
  deviceHeight,
  useInsets,
};
