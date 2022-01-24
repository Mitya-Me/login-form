import { Login } from "../pages/Login";
import { UserPage } from "../pages/UserPage";

export enum Routes { 
	LOGIN = '/',
	PROFILE = '/profile'
}

export const publicRoutes = [
	{path: Routes.LOGIN, component: Login, exact: true}
]

export const privateRoutes = [
	{path: Routes.PROFILE, component: UserPage, exact: true}
]