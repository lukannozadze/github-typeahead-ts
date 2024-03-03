import { useUserProvider } from "../../provider/UserProvider";
import LoadingSkeleton from "../shared/LoadingSkeleton";
import { Meteors } from "../ui/meteors";

function UserListCard() {
  const { users, isLoading, maxUsersPerPage } = useUserProvider();
  const selectedUsers = users?.slice(0, maxUsersPerPage);
  return (
    <section className="flex flex-col gap-8 items-center">
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <ul className="flex flex-col gap-8">
          {selectedUsers?.map((user) => {
            return (
              <li key={user.node_id}>
                <div className="px-4 py-4 max-w-[700px] min-w-[500px] flex items-center justify-between bg-[#1E2A47] rounded-md shadow-xl relative overflow-hidden">
                  <h2 className="text-white font-bold text-xl font-mono">
                    {user.login}
                  </h2>
                  <img
                    className="w-20 h-20 rounded-full"
                    src={user.avatar_url}
                    alt={user.login}
                  />
                  
             
                  <Meteors number={30}  />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default UserListCard;

