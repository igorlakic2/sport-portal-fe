import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import FormProvider from "../../../components/form/FormProvider";
import { FormTextField } from "../../../components/form/FormTextField";
import { Category } from "../../../services/CategoryServices";
import { CreateCategoryType } from "../../../types/category/CreateCategoryType";
import { DialogForm } from "../../../types/CommonTypes";
import { CategoryCreateUpdateSchema } from "../../../validators/CategoryValidators";
import useCreateCategory from "./hooks/useCreateCategory";
import useUpdateCategory from "./hooks/useUpdateCategory";

interface CategoryDialogPropsType {
  handleClose: () => void;
  dialogFormState: DialogForm<Category>;
}

const CategoryDialog = (props: CategoryDialogPropsType) => {
  const { handleClose, dialogFormState } = props;
  const categoryCreateMutation = useCreateCategory();
  const categoryUpdateMutation = useUpdateCategory();

  const formMethods = useForm<CreateCategoryType>({
    resolver: zodResolver(CategoryCreateUpdateSchema),
    mode: "onTouched",
    defaultValues: dialogFormState.entity,
  });

  const { handleSubmit } = formMethods;

  const onSubmit: SubmitHandler<CreateCategoryType> = (category) => {
    if (dialogFormState.operation === "create") {
      categoryCreateMutation.mutate(category, { onSuccess: handleClose });
    } else {
      categoryUpdateMutation.mutate({ categoryId: dialogFormState.entity?._id!, category }, { onSuccess: handleClose });
    }
  };

  return (
    <Dialog
      open={dialogFormState.visible}
      onClose={handleClose}
      PaperProps={{
        className: "w-full",
      }}
    >
      <FormProvider onSubmit={handleSubmit(onSubmit)} methods={formMethods}>
        <DialogTitle>{dialogFormState.operation === "create" ? "New category" : "Category update"}</DialogTitle>
        <DialogContent className="mx-6" sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <div>
            <div>
              <Typography>Name</Typography>
              <FormTextField<CreateCategoryType> controlKey="name" fullWidth focused />
            </div>
          </div>
        </DialogContent>
        <DialogActions className="mx-6" sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <Button onClick={handleClose} disabled={categoryCreateMutation.isPending} variant="outlined">
            Cancel
          </Button>
          <Button autoFocus disabled={categoryCreateMutation.isPending} type="submit" variant="contained">
            Save
          </Button>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

export default CategoryDialog;
