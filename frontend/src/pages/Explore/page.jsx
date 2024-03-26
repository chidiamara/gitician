import toast from 'react-hot-toast'
import Spinner from '../../components/Spinner'
import Repos from '../../components/Repos'
import { useState } from 'react'

const Explore = () => {
  const [repos, setRepos] = useState([])  // Repositories
  const [loading, setLoading] = useState(false)  // Loading state
  const [selectedLanguage, setSelectedLanguage] = useState('')  // Selected language
  const exploreRepo = async (language) => {
      setLoading(true)
      setRepos([]);
      try {
        const res = await fetch (`http://localhost:5000/api/explore/repos/${language}`)
        const {repos} = await res.json()
        setRepos(repos)
        setSelectedLanguage(language)
      } catch (error) {
        toast.error('Failed to fetch repositories')
      } finally {
        setLoading(false)
      }
    }
  return (
    <div className='px-4 mt-4'>
      <div className='max-w-2xl mx-auto rounded-md p-4 glass-background border-[#593A5A]'>
      {repos.length > 0 && (
          <h2 className='text-lg font-semibold text-center my-4'>
              <span className='bg-[#cebfce] text-[#593A5A] font-medium me-2 px-2.5 rounded-full py-0.5'>
                {selectedLanguage.toUpperCase()}{" "}
              </span>
              Repositories
            </h2>
          )}
          {!loading && repos.length > 0 && <Repos repos={repos} alwaysFullWidth />}
          {loading && <Spinner />}

        <h1 className='text-xl font-bold text-center'>Select a Language to Explore Popular Repositories</h1>
        <div className='flex flex-wrap justify-center gap-2 my-2'>
          <img src='/svg/java.svg' alt='java logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('java')}
          />
          <img src='/svg/javascript.svg' alt='javascript logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('javascript')}
          />
          <img src='/svg/typescript.svg' alt='typescript logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('typescript')}
          />
          <img src='/svg/python.svg' alt='python logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('python')}
          />
          <img src='/svg/c.svg' alt='c logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('c')}
          />
          <img src='/svg/c++.svg' alt='c++ logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('c++')}
          />
          <img src='/svg/csharp.svg' alt='csharp logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('csharp')}
          />
          <img src='/svg/html.svg' alt='html logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('html')}
          />
          <img src='/svg/css.svg' alt='css logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('css')}
          />
          <img src='/svg/bash.svg' alt='bash logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('bash')}
          />
          <img src='/svg/go.svg' alt='go logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('go')}
          />
          <img src='/svg/swift.svg' alt='swift logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('swift')}
          />
          <img src='/svg/ruby.svg' alt='ruby logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('ruby')}
          />
          <img src='/svg/php.svg' alt='php logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('php')}
          />
          <img src='/svg/rust.svg' alt='rust logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('rust')}
          />
          <img src='/svg/kotlin.svg' alt='kotlin logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('kotlin')}
          />
          <img src='/svg/scala.svg' alt='scala logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('scala')}
          />
          <img src='/svg/perl.svg' alt='perl logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('perl')}
          />
          <img src='/svg/r.svg' alt='r logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('r')}
          />
          <img src='/svg/objectivec.svg' alt='objectivec logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('objectivec')}
          />
          <img src='/svg/dart.svg' alt='dart logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('dart')}
          />
          <img src='/svg/coffeescript.svg' alt='coffeescript logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('coffeescript')}
          />
          <img src='/svg/erlang.svg' alt='erlang logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('erlang')}
          />
          <img src='/svg/elixir.svg' alt='elixir logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('elixir')}
          />
          <img src='/svg/haskell.svg' alt='haskell logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('haskell')}
          />
          <img src='/svg/lua.svg' alt='lua logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('lua')}
          />
          <img src='/svg/clojure.svg' alt='clojure logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('clojure')}
          />
          <img src='/svg/julia.svg' alt='julia logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('julia')}
          />
          <img src='/svg/nim.svg' alt='nim logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('nim')}
          />
          <img src='/svg/jupyter.svg' alt='jupyter logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('jupyter')}
          />
          <img src='/svg/fsharp.svg' alt='fsharp logo' className='h-11 sm:h-20 cursor-pointer'
          onClick={() => exploreRepo('fsharp')}
          />
        </div>
      </div>
    </div>
  )
}

export default Explore