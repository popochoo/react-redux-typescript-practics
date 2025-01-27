import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRepo, IUser, ServerResponse } from '../../models/models';

export const githubApi = createApi({
	reducerPath: 'githubApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
	refetchOnFocus: true,
	endpoints: (builder) => ({
		searchUsers: builder.query<IUser[], string>({
			query: (search: string) => ({
				url: 'search/users',
				params: {
					q: search,
					per_page: 10,
				},
			}),
			transformResponse: (response: ServerResponse<IUser>) => response.items,
		}),
		getUsersRepos: builder.query<IRepo[], string>({
			query: (username: string) => ({
				url: `users/${username}/repos`,
			}),
		}),
	}),
});

export const { useSearchUsersQuery, useLazyGetUsersReposQuery } = githubApi;