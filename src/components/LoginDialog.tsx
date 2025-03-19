import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import useLogin from "../hooks/useLogin";
import { LoginType } from "../types/AuthTypes";
import { LoginSchema } from "../validators/AuthValidators";
import FormProvider from "./form/FormProvider";
import { FormTextField } from "./form/FormTextField";

interface LoginDialogPropsType {
  visible: boolean;
  handleClose: () => void;
  login: (token: string) => void;
}

const LoginDialog = (props: LoginDialogPropsType) => {
  const { visible, handleClose, login } = props;
  const loginMutation = useLogin();

  const formMethods = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const { handleSubmit } = formMethods;

  const onSubmit: SubmitHandler<LoginType> = (data) => {
    loginMutation.mutate(data, {
      onSuccess: (res) => {
        handleClose();
        login(res.data.data.token);
      },
    });
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
        <DialogTitle>Login</DialogTitle>
        <DialogContent className="mx-6" sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <div>
            <div>
              <Typography>Email</Typography>
              <FormTextField<LoginType> controlKey="email" fullWidth />
            </div>
            <div>
              <Typography>Password</Typography>
              <FormTextField<LoginType> controlKey="password" fullWidth />
            </div>
          </div>
        </DialogContent>
        <DialogActions className="mx-6" sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <Button onClick={handleClose} disabled={loginMutation.isPending} variant="outlined">
            Cancel
          </Button>
          <Button autoFocus disabled={loginMutation.isPending} type="submit" variant="contained">
            Login
          </Button>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

export default LoginDialog;
