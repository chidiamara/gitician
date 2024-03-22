import Repo from '../../components/Repo'

const Repos = () => {
  return (
    <div className="lg:w-2/3 w-full glass-background border-[#593A5A] rounded-lg px-8 py-6">
        <ol className="relative border-s border-gray-200">
            <Repo/>
            <Repo/>
            <Repo/>
            <Repo/>
            <Repo/>
            <Repo/>
            <Repo/>
            <Repo/>
        </ol>
    </div>
  )
}

export default Repos