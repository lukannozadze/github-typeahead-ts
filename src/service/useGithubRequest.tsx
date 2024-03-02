import { useEffect } from "react";
import { GithubUsers } from "./types";
import { useUserProvider } from "../provider/UserProvider";
const BASE_URL = "https://api.github.com";
function useGithubRequest() {
  const { setUsers } = useUserProvider();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/search/users?q=${"lukannozadze"}`
        );
        if (!response.ok) {
          throw new Error("Something Went Wrong");
        }
        const data: GithubUsers = await response.json();
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []); //search param must be passed
}

export default useGithubRequest;
