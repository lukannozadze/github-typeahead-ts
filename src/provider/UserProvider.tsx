import { ReactNode, createContext, useContext, useRef, useState } from "react";
import { GithubUser } from "../service/types";
import { useGithubUsers } from "../service/github";

type PropsType = {
  children: ReactNode;
};
type ContextType = {
  users: GithubUser[] | undefined;
  search: (username: string) => void;
  setMaxUsersPerPage: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  isError: boolean;
  maxUsersPerPage: number;
};
type Timer = ReturnType<typeof setTimeout>;

const Context = createContext<ContextType>({
  users: undefined,
  search: () => {},
  setMaxUsersPerPage: () => {},
  isLoading: false,
  isError: false,
  maxUsersPerPage: 5,
});

function UserProvider({ children }: PropsType) {
  const [maxUsersPerPage, setMaxUsersPerPage] = useState(5);
  const timeoutRef = useRef<Timer | null>(null);
  const userMutations = useGithubUsers();
  const users = userMutations.data?.items;
  const isLoading = userMutations.isPending;
  const isError = userMutations.isError;

  const search = (username: string) => {
    timeoutRef && clearTimeout(timeoutRef.current as Timer);
    timeoutRef.current = setTimeout(() => {
      if (username !== "") userMutations.mutateAsync({ username });
    }, 500);
  };

  const contextValue: ContextType = {
    users,
    search,
    isLoading,
    isError,
    maxUsersPerPage,
    setMaxUsersPerPage,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default UserProvider;

export const useUserProvider = () => {
  const context = useContext(Context);
  if (Object.keys(context).length === 0) {
    throw new Error("UseContextProvider must be within ContextProvider");
  }
  return context;
};
