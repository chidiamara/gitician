import { RiLogoutCircleLine } from "react-icons/ri";

const Logout = () => {
  return (
    <>
			<img
				src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
				className='w-10 h-10 rounded-full border border-gray-800'
			/>
            <div className='cursor-pointer flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800 group relative'
                >

			{/* <div className='cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800 group relative'> */}
				<RiLogoutCircleLine size={22}/>
                <span className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded-full text-xs p-1.5 ">Logout</span>
			</div>
		</>
  )
}

export default Logout