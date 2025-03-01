import { useMutation, useQueryClient } from "@tanstack/react-query";
import CategoryServices from "../../../../services/CategoryServices";

export default function useDeleteCategory() {
  const queryClient = useQueryClient();
  const { deleteCategory } = CategoryServices();

  return useMutation({
    mutationFn: (categoryId: string) => deleteCategory(categoryId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });
}
