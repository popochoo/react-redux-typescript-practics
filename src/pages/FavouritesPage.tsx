import React from 'react';
import { useAppSelector } from '../hooks/redux';

const FavouritesPage = () => {
	const { favourites } = useAppSelector((state) => state.github);

	if (favourites.length === 0) return <p className='text-center'>No Items.</p>

	return (
		<div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
			<ul className='list-none space-y-2'>
				{favourites.map((f) => (
					<li key={f}>
						<a
							className='block p-4 text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 rounded-lg shadow transition-all duration-300 ease-in-out'
							href={f}
							target='_blank'
						>{f}</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default FavouritesPage;