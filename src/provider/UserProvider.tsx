import { ReactNode, createContext, useContext, useRef } from "react";
import { GithubUser } from "../service/types";
import { useGithubUsers } from "../service/github";


type PropsType = {
  children: ReactNode;
};
type ContextType = {
  users: GithubUser[] | undefined;
  search: (username: string) => void;
  isLoading: boolean;
  isError: boolean;
};
type Timer = ReturnType<typeof setTimeout>;

const Context = createContext<ContextType>({
  users: undefined,
  search: () => {},
  isLoading: false,
  isError: false,
});

function UserProvider({ children }: PropsType) {
  const timeoutRef = useRef<Timer | null>(null);
  const userMutations = useGithubUsers();
  const users = userMutations.data?.items;
  const isLoading = userMutations.isPending;
  const isError = userMutations.isError;


  const search = (username: string) => {
    timeoutRef && clearTimeout(timeoutRef.current as Timer);
    timeoutRef.current = setTimeout(() => {
      userMutations.mutateAsync({ username });
    }, 500);
  };

  const contextValue: ContextType = {
    users,
    search,
    isLoading,
    isError,
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
