import { useUserProvider } from "../../provider/UserProvider";
import { useParams } from "react-router-dom"


function UserInfo() {

const {users} = useUserProvider();
const {id} = useParams();
const activeUserArr = users?.filter(user=>user.node_id===id);
const activeUser = activeUserArr?activeUserArr[0]:undefined;


  return (
    <div className='flex flex-col gap-8 pl-16 pt-5'>
        <div className='flex items-center gap-10  font-mono'>
         <img className='w-40 h-40 rounded-full' src={activeUser?.avatar_url}/>
         <div className='flex flex-col gap-4' >
         <h1 className='text-white font-bold text-[32px] leading-[24px]'>{activeUser?.login}</h1>
         <p className='text-[#1079F9] '>ID: {activeUser?.id}</p>
         <p className='text-[#1079F9]'>Score: {activeUser?.score}</p>
        
         </div>
         
    
        </div>
        <a className='w-40'  href={activeUser?.html_url}><button>Visit Github Profile</button></a>
        <a className='w-40' href={activeUser?.url}><button className='bg-[#60ABFF] text-bold text-white text-base'>Personal Info</button></a>
        <p className='text-white font-bold'>Type: {activeUser?.type}</p>
        <p className='text-white font-bold'>Node ID: {activeUser?.node_id}</p>
    </div>
  )
}

export default UserInfo