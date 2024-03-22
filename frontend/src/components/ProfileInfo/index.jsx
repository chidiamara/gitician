import { FaEye } from "react-icons/fa";
import {TfiThought} from "react-icons/tfi";
import { ImLocation } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";
import { RiUserFollowFill } from "react-icons/ri";
import { RiUserFollowLine } from "react-icons/ri";

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
        
        {/* User Info */}
				{userProfile?.bio ? (
					<div className='flex items-center gap-2'>
						<TfiThought />
						<p className='text-sm'>{userProfile?.bio.substring(0, 60)}...</p>
					</div>
				) : null}

         {/* Location */}
				{userProfile?.location ? (
					<div className='flex items-center gap-2'>
						<ImLocation />
						{userProfile?.location}
					</div>
				) : null}

        {/* X Username Info */}
				{userProfile?.twitter_username ? (
					<a
						href={`https://x.com/${userProfile.twitter_username}`}
						target='_blank'
						rel='noreferrer'
						className='flex items-center gap-2 hover:text-sky-500'
					>
						<RiTwitterXFill />
						{userProfile?.twitter_username}
					</a>
				) : null}

         {/* Joined Github Date */}
				<div className='my-2'>
					<p className='text-gray-400 font-bold text-sm'>Member Since</p>
					<p className=''>14 Jul, 2021</p>
				</div>

         {/* Email Address Info */}
				{userProfile?.email && (
					<div className='my-2'>
						<p className='text-gray-400 font-bold text-sm'>Email address</p>
						<p className=''>{userProfile.email}</p>
					</div>
				)}
        
        {/* User Full Name Info */}
				{userProfile?.name && (
					<div className='my-2'>
						<p className='text-gray-400 font-bold text-sm'>Full name</p>
						<p className=''>{userProfile?.name}</p>
					</div>
				)}

        {/* Username Info */}
				<div className='my-2'>
					<p className='text-gray-400 font-bold text-sm'>Username</p>
					<p className=''>{userProfile?.login}</p>
				</div>

        {/* User Followers Count */}
        <div>
            <div className='flex items-center gap-2 glass-background border-[#593A5A] rounded-lg p-2 flex-1 min-w-24'>
              <RiUserFollowFill  className='w-5 h-5 bg-gradient-to-r from-[#593A5A] to-blue-900' />
              <p className='text-nxs'>Followers: {userProfile?.followers}</p>
            </div>

        {/* User Following Count */}
            <div className='flex items-center gap-2 glass-background border-[#593A5A] rounded-lg p-2 flex-1 min-w-24'>
              <RiUserFollowLine className='w-5 h-5 bg-gradient-to-r from-[#593A5A] to-blue-900' />
              <p className='text-nxs'>Following: {userProfile?.following}</p>
            </div>
        </div>

			</div>
		</div>
  )
}

export default ProfileInfo