import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { githubApi } from './github/github.api';
import githubReducer from './github/github.slice';

export const store = configureStore({
	reducer: {
		[githubApi.reducerPath]: githubApi.reducer,
		github: githubReducer,
	},
	middleware: (getDefualtMiddleware) => getDefualtMiddleware().concat(githubApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;