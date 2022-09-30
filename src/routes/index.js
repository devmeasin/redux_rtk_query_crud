import Home from '../pages/Home';
import Error from "../pages/Error";



export const router = [

	{
		path: '/',
		component: Home
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '*',
		component: Error
	},


]