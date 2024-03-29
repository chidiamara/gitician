import { AiFillLike } from 'react-icons/ai'
import toast from 'react-hot-toast';
import { useAuthContext } from '../../Context/auth';

const LikeProfile = ({userProfile}) => {

  const {userAuth} = useAuthContext();
  const isOwnProfile = userAuth?.username === userProfile.login;

  const profileLikeHandler = async () => {
    try {
      const res = await fetch(`/api/users/like/${userProfile.login}`, {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();

      if(data.error) throw new Error(data.error);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (!userAuth || isOwnProfile) return null;

  return (
    <button className='glass-background font-medium w-full text-nxs p-2 rounded-md cursor-pointer border border-[#593A5A] flex items-center gap-2'
    onClick={profileLikeHandler}
    >
      <AiFillLike size={22}/> Like Profile
    </button>
  )
}

export default LikeProfile