import { ReactNode, createContext, useState } from "react"
import { GithubUsers } from "../service/types"

type PropsType = {
  children:ReactNode
}
type ContextType = {
  users:GithubUsers | null,
  setUsers:React.Dispatch<React.SetStateAction<GithubUsers | null>>
}
const Context = createContext<ContextType>({
  users:null,
  setUsers: () => {}
});
function UserProvider({children}:PropsType) {
const [users,setUsers] = useState<GithubUsers | null >(null)
const contextValue:ContextType ={
 users,
 setUsers
}
return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export default UserProvider