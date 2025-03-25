import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { showNotification } from "../../../../redux/slices/notificationSlice";
import store from "../../../../redux/store";
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
      store.dispatch(showNotification({ message: `Category successfully deleted`, severity: "success" }));
    },
    onError: (error: AxiosError<{ message: string }>) =>
      store.dispatch(showNotification({ message: error.response?.data?.message!, severity: "error" })),
  });
}
