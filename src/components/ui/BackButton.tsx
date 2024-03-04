import { Link } from "react-router-dom"

function BackButton() {
  return (
    <Link to='/'>
   <button className=" absolute top-8 left-8 z-50 px-10 py-2 rounded-full bg-green-700 font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
   Back
</button>


    </Link>
  )
}

export default BackButton