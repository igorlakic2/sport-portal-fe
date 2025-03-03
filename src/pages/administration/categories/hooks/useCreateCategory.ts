import { useMutation, useQueryClient } from "@tanstack/react-query";
import CategoryServices from "../../../../services/CategoryServices";
import { CreateCategoryType } from "../../../../types/category/CreateCategoryType";

export default function useCreateCategory() {
  const { createCategory } = CategoryServices();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (category: CreateCategoryType) => createCategory(category),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => console.log(error),
  });
}
