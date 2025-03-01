import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import TableDeleteIcon from "../../../components/TableDeleteIcon";
import { Category } from "../../../services/CategoryServices";
import useCategoryList from "./hooks/useCategoryList";
import useDeleteCategory from "./hooks/useDeleteCategory";

const CategoriesListPage = () => {
  const { data, totalItems, isLoading, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = useCategoryList();
  const categoryDeleteMutation = useDeleteCategory();

  return (
    <Paper elevation={0} className="flex flex-col justify-start p-4">
      <Typography variant="h5" component="h5" className="text-left">
        Categories
      </Typography>
      <div className="flex justify-start my-4">
        <Button variant="contained" startIcon={<AddIcon />}>
          Add
        </Button>
      </div>
      {isLoading ? (
        "Loading"
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((category: Category, id) => (
                <TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell scope="row" sx={{ padding: "0 0 0 16px" }}>
                    {category.name}
                  </TableCell>
                  <TableCell sx={{ display: "flex", justifyContent: "end", padding: "0 0 0 16px" }}>
                    <IconButton aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <TableDeleteIcon
                      contentMessage="Are you sure you want to delete category?"
                      headerMessage="Delete category"
                      onSubmit={() => categoryDeleteMutation.mutate(category._id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 20]}
                  colSpan={3}
                  count={totalItems!}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  // ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
};

export default CategoriesListPage;
