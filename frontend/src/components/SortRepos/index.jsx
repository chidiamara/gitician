const SortRepos = () => {
  return (
    <div className='mb-2 flex justify-center lg:justify-end'>
			<button
				type='button'
				className={`py-2.5 px-5 me-2 mb-2 text-nxs sm:text-sm font-medium focus:outline-none rounded-lg glass-background border-[#593A5A]`}
			>
				Most Recent
			</button>
            <button
				type='button'
				className={`py-2.5 px-5 me-2 mb-2  text-nxs sm:text-sm font-medium focus:outline-none rounded-lg glass-background border-[#593A5A]`}
			>
				Most Forks
			</button>
			<button
				type='button'
				className={`py-2.5 px-5 me-2 mb-2  text-nxs sm:text-sm font-medium focus:outline-none rounded-lg glass-background border-[#593A5A]`}
			>
				Most Stars
			</button>
		</div>
  )
}

export default SortRepos