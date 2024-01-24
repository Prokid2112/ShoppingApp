/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react';
import { Image, View } from 'react-native';

import * as Animatable from 'react-native-animatable';
// import OneSignal from 'react-native-onesignal';

import R from '@/assets/R';

import { Text } from 'native-base';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { resetScreen } from '@/services/navigation/navigation-service';
const Intro: FC = () => {
	const navigation = useNavigation();

	useEffect(() => {
		changeScreen();
	}, []);

	const changeScreen = () => {
		setTimeout(() => {
			resetScreen('Startup');
			// replaceScreen(routeName);
		}, 1600);
	};

	return (
		<View style={styles.container}>
			<Animatable.View
				animation="bounceIn"
				direction="alternate"
				duration={4000}
				style={styles.logoContainer}>
				{/* <Image
					resizeMode="contain"
					source={R.images.logoApp}
					style={styles.image}
				/> */}
			</Animatable.View>
			<Animatable.View
				animation="bounceInLeft"
				direction="alternate"
				duration={3500}
				style={styles.label}>
				<Text
					width={'343'}
					textAlign={'center'}
					color={'black'}
					fontSize="md">
					Shopping
				</Text>
			</Animatable.View>
		</View>
	);
};

export default Intro;
