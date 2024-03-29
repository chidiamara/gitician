
import toast from "react-hot-toast";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useAuthContext } from "../../Context/auth";
import User from "../../../../server/models/user.model";

const Logout = () => {
	const {userAuth, setAuthUser} = useAuthContext();

	const logoutHandler = async () => {
		try {
			const res = await fetch("/api/auth/logout", {credentials: "include"});
			const data = await res.json();
			console.log(data);
			setAuthUser(null);
		} catch (error) {
			toast.error(error.message);
		}
	};
  return (
    <>
			<img
				src={userAuth.avatarUrl}
				className='w-10 h-10 rounded-full border border-[#593A5A]'
			/>
            <div className='cursor-pointer flex justify-center transition-colors duration-200 rounded-lg hover:bg-[#593A5A] group relative'
				onClick={logoutHandler}
                >

				<RiLogoutCircleLine size={22}/>
                <span className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#593A5A] text-white px-2 py-1 rounded-full text-xs p-1.5 ">Logout</span>
			</div>
		</>
  )
}

export default Logout