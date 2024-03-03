import Home from "./pages/home/Home"
import { useUserProvider } from "./provider/UserProvider"

function App() {
const {users}  = useUserProvider();
console.log(users);
  return (
    
   <Home/>
    
  )
}

export default App
