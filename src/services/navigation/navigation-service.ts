/* eslint-disable @typescript-eslint/no-explicit-any */
import { createRef } from 'react';

// import { ApplicationStackParamList } from '@navigation/screen-types';
import {
	CommonActions,
	NavigationContainerRef,
	StackActions,
} from '@react-navigation/native';
import { ApplicationStackParamList } from '@/types/navigation';

export const navigationRef =
	createRef<
		NavigationContainerRef<ApplicationStackParamList>
	>();

export function navigateScreen<
	RouteName extends keyof ApplicationStackParamList
>(
	...arg: undefined extends ApplicationStackParamList[RouteName]
		?
				| [screen: RouteName]
				| [
						screen: RouteName,
						params?: ApplicationStackParamList[RouteName]
				  ]
		: [
				screen: RouteName,
				params: ApplicationStackParamList[RouteName]
		  ]
) {
	navigationRef.current?.navigate(
		arg[0] as any,
		arg.length > 1 ? arg[1] : undefined
	);
}

export function pushScreen<
	RouteName extends keyof ApplicationStackParamList
>(
	...arg: undefined extends ApplicationStackParamList[RouteName]
		?
				| [screen: RouteName]
				| [
						screen: RouteName,
						params?: ApplicationStackParamList[RouteName]
				  ]
		: [
				screen: RouteName,
				params: ApplicationStackParamList[RouteName]
		  ]
) {
	navigationRef.current?.dispatch(
		StackActions.push(
			arg[0] as any,
			arg.length > 1 ? arg[1] : undefined
		)
	);
}

export function replaceScreen<
	RouteName extends keyof ApplicationStackParamList
>(
	...arg: undefined extends ApplicationStackParamList[RouteName]
		?
				| [screen: RouteName]
				| [
						screen: RouteName,
						params?: ApplicationStackParamList[RouteName]
				  ]
		: [
				screen: RouteName,
				params: ApplicationStackParamList[RouteName]
		  ]
) {
	navigationRef.current?.dispatch(
		StackActions.replace(
			arg[0] as any,
			arg.length > 1 ? arg[1] : undefined
		)
	);
}

export function resetScreen<
	RouteName extends keyof ApplicationStackParamList
>(
	...arg: undefined extends ApplicationStackParamList[RouteName]
		?
				| [screen: RouteName]
				| [
						screen: RouteName,
						params?: ApplicationStackParamList[RouteName]
				  ]
		: [
				screen: RouteName,
				params: ApplicationStackParamList[RouteName]
		  ]
) {
	navigationRef.current?.dispatch(
		CommonActions.reset({
			index: 0,
			routes: [
				{
					name: arg[0] as any,
					params: arg.length > 1 ? arg[1] : undefined,
				},
			],
		})
	);
}

export function goBack() {
	navigationRef.current?.dispatch(CommonActions.goBack);
}
