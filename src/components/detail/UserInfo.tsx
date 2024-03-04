import { useUserProvider } from "../../provider/UserProvider";
import { useParams } from "react-router-dom"
import { CardBody } from "../ui/3d-card";
import InvertButton from "../ui/InvertButton";
import LitupButton from "../ui/LitupButton";
function UserInfo() {

const {users} = useUserProvider();
const {id} = useParams();
const activeUserArr = users?.filter(user=>user.node_id===id);
const activeUser = activeUserArr?activeUserArr[0]:undefined;


  return (
   
      <CardBody className="flex flex-col gap-8 pl-16 pt-5">
        <div className="flex items-center gap-8">
        <div
          className="w-full mt-4"
        >
          <img
            src={activeUser?.avatar_url}
            height="1000"
            width="1000"
            className="w-40 h-40 rounded-full object-cover  group-hover/card:shadow-xl"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-bold text-[32px] leading-[24px]">{activeUser?.login}</h1>
          <p className='text-[#1079F9] '>ID: {activeUser?.id}</p>
          <p className='text-[#1079F9]'>Score: {activeUser?.score}</p>
                         </div>
        </div>

        <div className="flex items-center gap-10  font-mono">
        <div className="flex flex-col gap-4 duration-1000">
        <a className='w-50'  href={activeUser?.html_url}><InvertButton content="Github Profile"/></a>
        <a className='w-40' href={activeUser?.url}><LitupButton content="Profile Info"/></a>
         <p className='text-white font-bold'>Type: {activeUser?.type}</p>
         <p className='text-white font-bold'>Node ID: {activeUser?.node_id}</p>
        </div>
        </div>
      </CardBody>
 
  )
}

export default UserInfo

