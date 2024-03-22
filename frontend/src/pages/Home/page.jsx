import Search from '../../components/Search'
import SortRepos from '../../components/SortRepos'
import ProfileInfo from '../../components/ProfileInfo'
import Repos from '../../components/Repos'

import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Home = () => {

  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  const [sortType, setSortType] = useState("stars");


  // Use Callback To Avoid Infinite Loop
  const getUserProfAndRepo = useCallback(async() => {
      setLoading(true)
      try {
        const userResponse = await fetch ("https://api.github.com/users/openai")
        const userProfile = await userResponse.json();
        setUserProfile(userProfile);

        const repoResponse = await fetch(userProfile.repos_url);
        const repos = await repoResponse.json();
        setRepos(repos)
        console.log("userProfile:", userProfile);
        console.log("repos:", repos)
      } catch (error) {
        toast.error(error.message)
      } finally {
        setLoading(false)
      }
    }, []);

  useEffect(() => {
    getUserProfAndRepo();
  }, [getUserProfAndRepo]);

  return (
    <>
    <div className='m-4'>
    <Search/>
    <SortRepos/>
      <div className='flex flex-col lg:flex-row justify-center items-start gap-4'>
        <ProfileInfo userProfile={userProfile}/>
        <Repos/>
      </div>
    </div>
    </>
  )
}

export default Home