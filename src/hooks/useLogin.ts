import { useMutation } from "@tanstack/react-query";
import AuthServices from "../services/AuthServices";
import { LoginType } from "../types/AuthTypes";

export default function useLogin() {
  const { login } = AuthServices();

  return useMutation({
    mutationFn: (data: LoginType) => login(data),
    onSuccess: () => console.log("Success"),
    onError: (error) => console.log(error),
  });
}
