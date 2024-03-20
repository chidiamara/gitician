import React from 'react'
import { Link } from 'react-router-dom';
import Logout from "../Logout/index";
import SignupIcon from '../signupIcon/index';
import LoginIcon from '../loginIcon/index';
import LikesIcon from '../likeIcon/index';
import ExploreIcon from '../exploreIcon';
import HomeIcon from '../homeIcon';

const Sidebar = () => {
  const userAuth = true;
  return (
    <aside className='flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r glass-background'>
        <nav className='h-full flex flex-col gap-3'>
            <Link to="/"
                className='flex justify-center transition-colors duration-200 rounded-lg hover:bg-[#593A5A]'>
                <img src="/svg/github.svg" alt="Github logo" className="w-8 h-8"/>
            </Link>

            <Link to="/">
                <HomeIcon/>
            </Link>

            {userAuth && (
            <Link to="/explore">
                <ExploreIcon/>
            </Link>
            )}

            {userAuth && (
            <Link to="/likes">
                <LikesIcon/>
            </Link>
            )}

            {!userAuth && (
            <Link to="/login">
                <LoginIcon/>
            </Link>
            )}

            {!userAuth && (
            <Link to="/signup">
                <SignupIcon/>
            </Link>
            )}

            {userAuth && (
                <div className='flex flex-col gap-3 mt-auto'>
				    <Logout />
                </div>
            )}
        </nav>
    </aside>
  )
}

export default Sidebar