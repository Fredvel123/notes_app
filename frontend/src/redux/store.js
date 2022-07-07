import { configureStore } from '@reduxjs/toolkit';
// slices
import auth from './slices/auth';

export const store = configureStore({
	reducer: {
		auth,
	},
});
