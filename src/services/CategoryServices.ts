import axios, { AxiosResponse } from "axios";
import CommonPaginationResponse from "../infrastructure/CommonPaginationResponse";
import CommonResponse from "../infrastructure/CommonResponse";
import Endpoint from "../infrastructure/Endpoint";
import PaginationProps from "../infrastructure/PaginationProps";
import { axiosConfig } from "../utils/Utils";

export interface Category {
  _id: string;
  name: string;
}

interface CategoryServicesReturnTypes {
  getCategories: (params: PaginationProps) => Promise<AxiosResponse<CommonPaginationResponse<Category[]>>>;
  deleteCategory: (categoryId: string) => Promise<AxiosResponse<CommonResponse<Category>>>;
}

export default function CategoryServices(): CategoryServicesReturnTypes {
  const getCategories = (params: PaginationProps) => {
    return axios.get(Endpoint.CATEGORIES, axiosConfig(params));
  };

  const deleteCategory = (categoryId: string) => {
    return axios.delete(`${Endpoint.CATEGORIES}/${categoryId}`);
  };

  return { getCategories, deleteCategory };
}
