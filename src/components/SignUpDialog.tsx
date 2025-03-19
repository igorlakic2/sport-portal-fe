import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import useSignUp from "../hooks/useSignUp";
import { SignUpType } from "../types/AuthTypes";
import { SignUpSchema } from "../validators/AuthValidators";
import FormProvider from "./form/FormProvider";
import { FormTextField } from "./form/FormTextField";

interface SignUpDialogPropsType {
  visible: boolean;
  handleClose: () => void;
}

const SignUpDialog = (props: SignUpDialogPropsType) => {
  const { visible, handleClose } = props;
  const signUpMutation = useSignUp();

  const formMethods = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema),
  });

  const { handleSubmit } = formMethods;

  const onSubmit: SubmitHandler<SignUpType> = (data) => {
    signUpMutation.mutate(data, { onSuccess: handleClose });
  };

  return (
    <Dialog
      open={visible}
      onClose={handleClose}
      PaperProps={{
        className: "w-full",
      }}
    >
      <FormProvider onSubmit={handleSubmit(onSubmit)} methods={formMethods}>
        <DialogTitle>Sign up</DialogTitle>
        <DialogContent className="mx-6" sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <div>
            <div>
              <Typography>First name</Typography>
              <FormTextField<SignUpType> controlKey="firstName" fullWidth focused />
            </div>
            <div>
              <Typography>Last name</Typography>
              <FormTextField<SignUpType> controlKey="lastName" fullWidth />
            </div>
            <div>
              <Typography>Email</Typography>
              <FormTextField<SignUpType> controlKey="email" fullWidth />
            </div>
            <div>
              <Typography>Password</Typography>
              <FormTextField<SignUpType> controlKey="password" fullWidth />
            </div>
          </div>
        </DialogContent>
        <DialogActions className="mx-6" sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <Button onClick={handleClose} disabled={signUpMutation.isPending} variant="outlined">
            Cancel
          </Button>
          <Button autoFocus disabled={signUpMutation.isPending} type="submit" variant="contained">
            Sign up
          </Button>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

export default SignUpDialog;
