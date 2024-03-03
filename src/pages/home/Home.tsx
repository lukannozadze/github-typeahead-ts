import { useUserProvider } from "../../provider/UserProvider";
import UserListCard from "../../components/home/UserListCard";
import UserSearchForm from "../../components/home/UserSearchForm";
import { useToast } from "../../components/ui/toast/use-toast";
import { Toaster } from "../../components/ui/toast/toaster";
import { useEffect } from "react";
function Home() {
  const { isError } = useUserProvider();
  const { toast } = useToast();

  useEffect(() => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    });
  }, [isError]);

  return (
    <>
      <UserSearchForm />
      <UserListCard />
      {isError && <Toaster />}
    </>
  );
}

export default Home;
