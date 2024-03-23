const SortRepos = ({onSort, sortType}) => {
	const buttons = [
		{ label: 'Most Recent', type: 'created' },
		{ label: 'Most Forks', type: 'forks' },
		{ label: 'Most Stars', type: 'stars' },
	];
  return (
    <div className='mb-2 flex justify-center lg:justify-end'>

<div className='mb-2 flex justify-center lg:justify-end'>
				{buttons.map((button) => (
			<button
				key={button.type}
				type='button'
				className={`py-2.5 px-5 me-2 mb-2 text-nxs sm:text-sm font-medium focus:outline-none rounded-lg glass-background border-[#593A5A]
				${sortType === button.type ? 'bg-[#593A5A] text-white' : ''}
				`}
				onClick={() => onSort(button.type)}
			>
				{button.label}
			</button>
		))}
			</div>
		</div>
  )
}

export default SortRepos