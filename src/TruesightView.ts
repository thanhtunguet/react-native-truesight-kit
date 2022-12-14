import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-truesight-kit' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

export type TruesightProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'TruesightView';

export const TruesightView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<TruesightProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
