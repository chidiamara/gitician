import Search from '../../components/Search'
import SortRepos from '../../components/SortRepos'
import ProfileInfo from '../../components/ProfileInfo'
import Repos from '../../components/Repos'
import Spinner from '../../components/Spinner'


import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

/**
 * Renders the Home page component.
 *
 * @returns {JSX.Element} The Home page component.
 */
/**
 * Represents the Home page component.
 * @component
 */

const Home = () => {

  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  const [sortType, setSortType] = useState("stars");


  // Use Callback To Avoid Infinite Loop
  /**
   * Fetches user profile and repositories from the GitHub API.
   * @returns {Promise<void>} A promise that resolves when the data is fetched.
   */
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

    /**
   * Handles the form submission for searching a user on GitHub.
   * @param {Event} e - The form submit event.
   * @param {string} username - The username of the user to search for.
   * @returns {Promise<void>}
   */
    const onSearchSubmit = async (e, username) => { 
      e.preventDefault();
      setLoading(true);
      try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userProfile = await userResponse.json();
        setUserProfile(userProfile);
  
        const repoResponse = await fetch(userProfile.repos_url);
        const repos = await repoResponse.json();
        setRepos(repos);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className='m-4'>
    <Search onSearchSubmit={onSearchSubmit}/>
    <SortRepos/>
      <div className='flex flex-col lg:flex-row justify-center items-start gap-4'>
        {userProfile && !loading && <ProfileInfo userProfile={userProfile}/>}
        {repos.length > 0 && !loading && <Repos repos={repos}/>}
        {loading && <Spinner/>}
      </div>
    </div>
  )
}

export default Home