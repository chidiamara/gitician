import { FaCodeBranch, FaCopy, FaStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";

const Repo = () => {
  return (
    <li className="mb-10 ms-7">
    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-md -start-3 ring-8 ring-white">
        <FaCodeBranch className="w-5 h-5 text-gray-800"/>
    </span>
    <div className="flex gap-2 flex-wrap items-center">
        <a href={"https://github.com/chidiamara/expense-tracker"}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 text-lg font-semibold"
        >
            Expense Tracker
        </a>

        <span className="bg-purple-100 text-purple-800 text-nxs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <FaCodeFork/> 32
            </span>
            <span className="bg-yellow-100 text-yellow-600 text-nxs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <FaStar/> 89
            </span>
            <span className="cursor-pointer bg-green-100 text-green-900 text-nxs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <FaCopy/> Clone
        </span>
    </div>

    <time className="block my-1 text-nxs font-normal leading-none text-gray-400">
            Released on March 2022
    </time>
        <p>Expense Tracker | HTML, CSS and JavaScript </p>
        <img src={"/svg/css.svg"} alt="Programming language icon" className="h-8" />
</li>
  )
}

export default Repo