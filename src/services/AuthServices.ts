import axios, { AxiosResponse } from "axios";
import CommonResponse from "../infrastructure/CommonResponse";
import Endpoint from "../infrastructure/Endpoint";
import { LoginType, SignUpType } from "../types/AuthTypes";

interface AuthServicesReturnTypes {
  signUp: (data: SignUpType) => Promise<AxiosResponse<CommonResponse<string>>>;
  login: (data: LoginType) => Promise<AxiosResponse<CommonResponse<{ token: string; userId: string }>>>;
}

export default function AuthServices(): AuthServicesReturnTypes {
  const signUp = (data: SignUpType) => {
    return axios.put(`${Endpoint.AUTH}/sign-up`, data);
  };

  const login = (data: LoginType) => {
    return axios.post(`${Endpoint.AUTH}/login`, data);
  };

  return { signUp, login };
}
