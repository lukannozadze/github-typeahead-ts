import { ChangeEvent } from "react";
import { Input } from "../ui/input";
import { useUserProvider } from "../../provider/UserProvider";
function UserSearchForm() {
  const { search } = useUserProvider();
  const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    search(e.target.value);
  };
  return (
    <form className="flex justify-center py-6">
      <Input
        className="w-1/3"
        placeholder="Enter Username"
        onChange={searchInputHandler}
      />
    </form>
  );
}

export default UserSearchForm;
