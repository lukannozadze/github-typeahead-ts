import UserListCard from "../../components/home/UserListCard"
import UserSearchForm from "../../components/home/UserSearchForm"

function Home() {
  return (
    <>
    <UserSearchForm/>
    <UserListCard/>
    </>
      /* {isLoading && <Icons.spinner className="h-12 w-12 animate-spin" />} */
      /* <UserList value={value} /> */
      /* {isError && <Toaster />} */
   
   
  )
}

export default Home