import { AiFillLike } from "react-icons/ai";

const LikesIcon = () => {
  return (
    <div className='flex justify-center transition-colors duration-200 rounded-lg hover:bg-[#593A5A] group relative'>
                <AiFillLike size={22}/>
                <span className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#593A5A] text-white px-2 py-1 rounded-full text-xs p-1.5 ">Likes</span>
    </div>
  )
}

export default LikesIcon