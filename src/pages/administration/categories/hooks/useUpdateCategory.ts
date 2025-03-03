import { useMutation, useQueryClient } from "@tanstack/react-query";
import CategoryServices from "../../../../services/CategoryServices";
import { CreateCategoryType } from "../../../../types/category/CreateCategoryType";

export default function useUpdateCategory() {
  const { updateCategory } = CategoryServices();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: { categoryId: string; category: CreateCategoryType }) => updateCategory(params.categoryId, params.category),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => console.log(error),
  });
}
