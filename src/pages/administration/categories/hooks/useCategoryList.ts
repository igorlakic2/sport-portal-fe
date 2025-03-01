import { useQuery } from "@tanstack/react-query";
import { usePaginate } from "../../../../infrastructure/usePaginate";
import CategoryServices from "../../../../services/CategoryServices";

export default function useCategoryList() {
  const { getCategories } = CategoryServices();
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = usePaginate();

  const query = useQuery({
    queryKey: ["categories", page, rowsPerPage],
    queryFn: () => getCategories({ page: page + 1, rowsPerPage }).then((res) => res.data),
  });

  return {
    ...query,
    data: query.data?.data,
    totalItems: query.data?.totalItems,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  };
}
