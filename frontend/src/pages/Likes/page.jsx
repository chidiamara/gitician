import { AiFillLike } from "react-icons/ai";

const Likes = () => {
  return (
    <div className='relative overflow-x-auto shadow-md rounded-lg px-4 pt-5'>
			<table className='w-[80%] mx-auto text-sm text-left rtl:text-right glass-background border border-[#593A5A] overflow-hidden'>
				<thead className='text-nxs uppercase border-b border-[#593A5A] glass-background'>
					<tr>
						<th scope='col' className='p-4'>
							<div className='flex items-center'>No</div>
						</th>
						<th scope='col' className='px-6 py-3'>
							User
						</th>
						<th scope='col' className='px-6 py-3'>
							Activity
						</th>
						<th scope='col' className='px-6 py-3'>
							Date
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className='glass-background border-b border-[#593A5A]'>
						<td className='w-4 p-4'>
							<div className='flex items-center'>
								<span>1</span>
							</div>
						</td>
						<th scope='row' className='flex items-center px-6 py-4 whitespace-nowrap '>
							<img
								className='w-10 h-10 rounded-full'
								src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
								alt='Linkard image'
							/>
							<div className='ps-3'>
								<div className='text-base font-semibold'>Maran</div>
							</div>
						</th>
						<td className='px-6 py-4'>
							<div className='flex items-center'>
								<AiFillLike size={22} className='text-[#4f7ba7] mx-2' />
								Liked
							</div>
						</td>
						<td className='px-6 py-4'>today</td>
					</tr>
				</tbody>
			</table>
		</div>
  )
}

export default Likes