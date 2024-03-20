import { MdTravelExplore } from "react-icons/md";

const ExploreIcon = () => {
  return (
    <div className='flex justify-center transition-colors duration-200 rounded-lg hover:bg-[#593A5A] group relative'>
                <MdTravelExplore size={20}/>
                <span className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#593A5A] text-white px-2 py-1 rounded-full text-xs">Explore</span>
    </div>
  )
}

export default ExploreIcon