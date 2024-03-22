import Repo from '../../components/Repo'

const Repos = ({repos}) => {
  return (
    <div className="lg:w-2/3 w-full glass-background border-[#593A5A] rounded-lg px-8 py-6">
        <ol className="relative border-s border-gray-200">
            {repos.map(repo => (
                <Repo key={repo.id} repo={repo} />
            ))}
            {repos.length === 0 && <p className="flex items-center justify-center h-32">No Repository Found</p>}
        </ol>
    </div>
  )
}

export default Repos