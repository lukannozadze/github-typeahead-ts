import type { GithubUsers } from "./types";
import { useMutation } from "@tanstack/react-query";

const BASE_URL = "https://api.github.com";

export const useGithubUsers = () => {
  return useMutation({
    mutationFn: async (payload: { username: string }) => {
      const res = await fetch(`${BASE_URL}/search/users?q=` + payload.username);
      if(!res.ok){
        throw new Error('Something Went Wrong')
      }
      return res.json() as Promise<GithubUsers>;
    },
  });
};