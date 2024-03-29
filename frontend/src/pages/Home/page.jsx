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

  const [sortType, setSortType] = useState("created"); // State for sorting


  // Use Callback To Avoid Infinite Loop
  /**
   * Fetches user profile and repositories from the GitHub API.
   * @returns {Promise<void>} A promise that resolves when the data is fetched.
   */
  const getUserProfAndRepo = useCallback (async(username= "openai") => {
      setLoading(true)
      try {
        const userProfileRes = await fetch(`api/users/profile/${username}`); // Fetch the user profile
        const {userProfile, repos} = await userProfileRes.json();
        repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // Sort the repositories based on the created date
        setRepos(repos);
        setUserProfile(userProfile);

        return { userProfile, repos}
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

    const [repos, setRepos] = useState([]); // State for repositories

    const onSearchSubmit = async (e, username) => {
      e.preventDefault();
      setLoading(true);
      setRepos([]); // Clear the repositories
      setUserProfile(null); // Clear the user profile

      const { userProfile, repos } = await getUserProfAndRepo(username);

      setUserProfile(userProfile);
      setRepos(repos);
      setSortType("created"); // Reset the sorting type
      setLoading(false);
    };



  /**
   * Handles the sorting of repositories based on the given type.
   * @param {string} type - The type of sorting to be applied (e.g. "stars", "forks", "created").
   */
  const onSort = (type) => {
    setSortType(type);
    const sorted = [...repos].sort((a, b) => { // Sort the repositories based on the type
      switch (type) {
        case "stars":
          return b.stargazers_count - a.stargazers_count;
        case "forks":
          return b.forks_count - a.forks_count;
        case "created":
          return new Date(b.created_at) - new Date(a.created_at);
        default:
          return 0;
      }
    });
    setRepos(sorted);
  };

  return (
    <div className='m-4'>
    <Search onSearchSubmit={onSearchSubmit}/>
    {repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType}/>}
      <div className='flex flex-col lg:flex-row justify-center items-start gap-4'>
        {userProfile && !loading && <ProfileInfo userProfile={userProfile}/>}
        {!loading && <Repos repos={repos}/>}
        {loading && <Spinner/>}
      </div>
    </div>
  )
}

export default Home