import axios, { AxiosResponse } from "axios";
import CommonPaginationResponse from "../infrastructure/CommonPaginationResponse";
import CommonResponse from "../infrastructure/CommonResponse";
import Endpoint from "../infrastructure/Endpoint";
import PaginationProps from "../infrastructure/PaginationProps";
import { CreateCategoryType } from "../types/category/CreateCategoryType";
import { axiosConfig } from "../utils/Utils";

export interface Category {
  _id: string;
  name: string;
}

interface CategoryServicesReturnTypes {
  getCategories: (params: PaginationProps) => Promise<AxiosResponse<CommonPaginationResponse<Category[]>>>;
  deleteCategory: (categoryId: string) => Promise<AxiosResponse<CommonResponse<Category>>>;
  createCategory: (category: CreateCategoryType) => Promise<AxiosResponse<CommonResponse<Category>>>;
  updateCategory: (categoryId: string, category: CreateCategoryType) => Promise<AxiosResponse<CommonResponse<Category>>>;
}

export default function CategoryServices(): CategoryServicesReturnTypes {
  const getCategories = (params: PaginationProps) => {
    return axios.get(Endpoint.CATEGORIES, axiosConfig(params));
  };

  const deleteCategory = (categoryId: string) => {
    return axios.delete(`${Endpoint.CATEGORIES}/${categoryId}`);
  };

  const createCategory = (category: CreateCategoryType) => {
    return axios.post(Endpoint.CATEGORIES, category);
  };

  const updateCategory = (categoryId: string, category: CreateCategoryType) => {
    return axios.put(`${Endpoint.CATEGORIES}/${categoryId}`, category);
  };

  return { getCategories, deleteCategory, createCategory, updateCategory };
}
