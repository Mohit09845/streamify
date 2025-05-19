import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../lib/api";

const useLogout = () => {
  const queryClient = useQueryClient();

  const {
    mutateAsync,
    isPending,
    error,
  } = useMutation({
    mutationFn: logout,
    onSuccess: () => queryClient.setQueryData(["authUser"], null),
  });

  return { logoutMutationAsync: mutateAsync, isPending, error };
};

export default useLogout;

