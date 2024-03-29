import { AiFillLike } from 'react-icons/ai'

const LikeProfile = () => {
  const profileLikeHandler = () => {
    console.log('Profile Liked')
  }
  return (
    <button className='glass-background font-medium w-full text-nxs p-2 rounded-md cursor-pointer border border-[#593A5A] flex items-center gap-2'
    onClick={profileLikeHandler}
    >
      <AiFillLike size={22}/> Like Profile
    </button>
  )
}

export default LikeProfile