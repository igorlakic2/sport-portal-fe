import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showNotification } from "../../../../redux/slices/notificationSlice";
import store from "../../../../redux/store";
import CategoryServices from "../../../../services/CategoryServices";
import { CreateCategoryType } from "../../../../types/category/CreateCategoryType";

export default function useUpdateCategory() {
  const { updateCategory } = CategoryServices();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: { categoryId: string; category: CreateCategoryType }) => updateCategory(params.categoryId, params.category),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      store.dispatch(showNotification({ message: `Category successfully updated`, severity: "success" }));
    },
    onError: (error) => store.dispatch(showNotification({ message: error.message, severity: "error" })),
  });
}
