import { Dimensions } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const { width: widthScreen, height: heightScreen } =
	Dimensions.get('screen');

const deviceHeight =
	height - (initialWindowMetrics?.insets.top ?? 0);
export const WIDTH = (w: number): number =>
	width * (w / 375);

export const HEIGHT = (h: number): number =>
	deviceHeight * (h / 812);

export const WIDTH_SCREEN = (w: number): number =>
	widthScreen * (w / 375);

export const HEIGHT_SCREEN = (h: number): number =>
	heightScreen * (h / 812);

export const getWidth = (): number => width;

export const getHeight = (): number => height;

export const getFontSize = (fontSize: number) => fontSize;
