import { FaEye } from "react-icons/fa";

const ProfileInfo = () => {

  const userProfile = {
		avatar_url: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
		bio: "👨🏻‍💻👨🏻‍💻👨🏻‍💻",
		email: "maranara@gmail.com",
		followers: 345,
		following: 42,
		html_url: "https://github.com/openai",
		location: "Under the Sun",
		name: "Mara Nara",
		public_gists: 34,
		public_repos: 21,
		twitter_username: "maranara",
		login: "maranara",
	};

  return (
    <div className='lg:w-1/3 w-full flex flex-col gap-2 md:sticky md:top-10'>
			<div className='glass-background rounded-lg p-4 border-[#593A5A]'>
				<div className='flex gap-4 items-center'>
					{/* Avatar For User */}
					<a href={userProfile?.html_url} target='_blank' rel='noreferrer'>
						<img src={userProfile?.avatar_url} className='rounded-md w-24 h-24 mb-2' alt='' />
					</a>

          {/* Display on Github */}
					<div className='flex gap-2 items-center flex-col'>
						<a
							href={userProfile.html_url}
							target='_blank'
							rel='noreferrer'
							className='glass-background font-medium w-full text-nxs p-2 rounded-md cursor-pointer border border-[#593A5A] flex items-center gap-2'
						>
							<FaEye size={16} />
							 View on Github
						</a>
					</div>
				</div>
			</div>
		</div>
  )
}

export default ProfileInfo