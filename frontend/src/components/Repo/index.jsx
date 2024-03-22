import { FaCodeBranch } from "react-icons/fa";

const Repo = () => {
  return (
    <li className="mb-10 ms-7">
    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-md -start-3 ring-8 ring-white">
        <FaCodeBranch className="w-5 h-5 text-gray-800"/>
    </span>
    <div>
        <a href={"https://github.com/chidiamara/expense-tracker"}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 text-lg font-semibold"
        >
            Expense Tracker
        </a>
    </div>
</li>
  )
}

export default Repo