import { AiFillLike } from "react-icons/ai";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { formatDate } from "../../utils/functions";

const Likes = () => {
	const [likes, setLikes] = useState([]);

	useEffect(() => {
		const getLikes = async () => {
			try {
				const res = await fetch("/api/users/likes",
				 {credentials: "include"});
				const data = await res.json();
				if(data.error) throw new Error(data.error);
				
				setLikes(data.likedBy);
			} catch (error) {
				toast.error(error.message);
			}
		}
		getLikes();
	}, []);

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
					{likes.map((user, idx) => (
						<tr className='glass-background border-b border-[#593A5A]' key={user.username}>
						<td className='w-4 p-4'>
							<div className='flex items-center'>
								<span>{idx + 1}</span>
							</div>
						</td>
						<th scope='row' className='flex items-center px-6 py-4 whitespace-nowrap '>
							<img
								className='w-10 h-10 rounded-full'
								src={user.avatarUrl}
								alt='User Avatar'
							/>
							<div className='ps-3'>
								<div className='text-base font-semibold'>{user.username}</div>
							</div>
						</th>
						<td className='px-6 py-4'>
							<div className='flex items-center'>
								<AiFillLike size={22} className='text-[#4f7ba7] mx-2' />
								Liked
							</div>
						</td>
						<td className='px-6 py-4'>{formatDate(user.likedDate)}</td>
					</tr>
					))}
				</tbody>
			</table>
		</div>
  )
}

export default Likes