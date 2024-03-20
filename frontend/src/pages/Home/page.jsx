import Search from '../../components/Search'
import SortRepos from '../../components/SortRepos'

const Home = () => {
  return (
    <>
    <div className='m-4'>
    <Search/>
    <SortRepos/>
    <div className='flex flex-col lg:flex-row justify-center items-start gap-4'>
      profile info
    </div>
    </div>
    </>
  )
}

export default Home