import { ChangeEvent } from "react";
import { Input } from "../ui/input";
import { useUserProvider } from "../../provider/UserProvider";
import UserSelect from "./UserSelect";
function UserSearchForm() {
  const { search } = useUserProvider();
  
  const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    search(e.target.value);
  };

  return (
    <form className="flex justify-center py-6 gap-8">
      <Input
        className="w-1/4"
        placeholder="Enter Username"
        onChange={searchInputHandler}
      />
      <UserSelect />
    </form>
  );
}

export default UserSearchForm;
