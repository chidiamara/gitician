import { IoSearch } from 'react-icons/io5'
import { useState } from 'react'

const Search = ({onSearchSubmit}) => {
	const [username, setUsername] = useState('');
  return (
    <form className='max-w-xl mx-auto mt-10 p-2 sm:w-72'
	onSubmit={(e) => onSearchSubmit(e, username)}
	>
			<label htmlFor='default-search' className='mb-2 text-sm font-medium  text-gray-900 sr-only'>
				Search
			</label>
			<div className='relative'>
				<div className='absolute inset-y-0 start-0 flex items-center z-10 ps-3 pointer-events-none'>
					<IoSearch className='w-5 h-5' />
				</div>
				<input
					type='search'
					id='default-search'
					className='block w-full p-4 ps-10 text-sm rounded-lg glass-background focus:ring-blue-500 border-[#593A5A] focus:border-blue-500 bg-transparent focus:bg-transparent '
					placeholder='maranara'
					required
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<button
					type='submit'
					className='text-white absolute end-2.5 bottom-2.5 bg-[#593A5A] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  bg-gradient-to-r from-[#593A5A] to-blue-900 hover:scale-95 active:scale-90 transition-all duration-300'
				>
					Search
				</button>
			</div>
		</form>
  )
}

export default Search