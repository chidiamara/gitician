import { FaGithub, FaUnlockAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { githubLoginHandler } from "../../Lib/function.js";

const SignUp = () => {
	
  return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
			<div className='w-full glass-background rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
				<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
					<h1 className='text-xl font-bold md:text-2xl text-center'>Create Account</h1>
					<button
						type='button'
						className='text-white bg-[#593A5A] hover:bg-[#593A5A]/90 focus:ring-4
						focus:ring-[#593A5A]/50 font-medium rounded-lg flex gap-2 p-2 items-center w-full
						text-center justify-center'
						onClick={githubLoginHandler}
					>
						<FaGithub className='w-5 h-5' />
						Sign up with Github
					</button>
					<p className='text-gray-300 text-center'>
						Sign up and unlock
            <span>
							<FaUnlockAlt className='w-4 h-4 inline mx-2' />
						</span> all app features.
					</p>
					<p className='text-sm font-light text-gray-400 text-center'>
						Already have an account?{" "}
						<Link to='/login' className='font-medium text-primary-600 hover:underline text-blue-600'>
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
  )
}

export default SignUp