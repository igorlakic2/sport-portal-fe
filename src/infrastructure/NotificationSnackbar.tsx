import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideNotification } from "../redux/slices/notificationSlice";
import { AppDispatch, RootState } from "../redux/store";

const NotificationSnackbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { message, severity, open } = useSelector((state: RootState) => state.notification);

  const handleClose = () => {
    dispatch(hideNotification());
  };

  const snackbarStyle = () => {
    if (severity === "error") return { border: "2px solid #d94f4f" };
    if (severity === "success") return { border: "2px solid #408844" };
    if (severity === "info") return { border: "2px solid #1993d5" };
    if (severity === "warning") return { border: "2px solid #ee7918" };
  };

  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%", ...snackbarStyle() }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default NotificationSnackbar;
