import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TopLevelErrorPage = () => {
  const navigate = useNavigate();
  const toHomePageAndRefresh = () => {
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="flex flex-1 justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-4">
        <WarningAmberIcon fontSize="large" />
        <Typography variant="h4">Something went wrong</Typography>
        <Typography>An error occured. Please return to home page and try again.</Typography>
        <Button onClick={toHomePageAndRefresh} variant="contained">
          Home
        </Button>
      </div>
    </div>
  );
};

export default TopLevelErrorPage;
