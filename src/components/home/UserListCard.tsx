import { useUserProvider } from "../../provider/UserProvider";
import LoadingSkeleton from "../shared/LoadingSkeleton";

function UserListCard() {
  const { users, isLoading } = useUserProvider();
  return (
    <section className="flex flex-col gap-8 items-center">
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <ul className="flex flex-col gap-8">
          {users?.map((user) => {
            return (
              <li key={user.node_id}>
                <div className="px-4 py-4 max-w-[700px] min-w-[500px] flex items-center justify-between bg-[#1E2A47] rounded-md shadow-xl">
                  <h2 className="text-white font-bold text-xl font-mono">
                    {user.login}
                  </h2>
                  <img
                    className="w-20 h-20 rounded-full"
                    src={user.avatar_url}
                    alt={user.login}
                  />
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
