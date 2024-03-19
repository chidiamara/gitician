import { FaUserEdit } from "react-icons/fa";

const SignupIcon = () => {
  return (
    <div className='flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800 group relative'>
                <FaUserEdit size={22}/>
                <span className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded-full text-xs p-1.5 ">SignUp</span>
    </div>
  )
}

export default SignupIcon