import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth/useAuth";
import LoginDialog from "./components/LoginDialog";
import SignUpDialog from "./components/SignUpDialog";

const adminPages = [
  { label: "Users", path: "/administration/users" },
  { label: "Categories", path: "/administration/categories" },
  { label: "News", path: "/administration/news" },
];

const AppTopbar = () => {
  const { login, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [signUpVisible, setSignUpVisible] = useState<boolean>(false);
  const [loginVisible, setLoginVisible] = useState<boolean>(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth={false}>
          <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              {isAuthenticated && (
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  {adminPages.map((page) => (
                    <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                      <Typography sx={{ textAlign: "center" }}>{page.label}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            {isAuthenticated && (
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {adminPages.map((page) => (
                  <Button key={page.label} onClick={() => navigate(page.path)} sx={{ my: 2, color: "white", display: "block" }}>
                    {page.label}
                  </Button>
                ))}
              </Box>
            )}

            {isAuthenticated ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>Settings</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }} onClick={logout}>
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <div className="flex gap-3">
                <Typography className="cursor-pointer" onClick={() => setLoginVisible(true)}>
                  Login
                </Typography>
                <Typography className="cursor-pointer" onClick={() => setSignUpVisible(true)}>
                  Sign up
                </Typography>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {signUpVisible && <SignUpDialog visible={signUpVisible} handleClose={() => setSignUpVisible(false)} />}
      {loginVisible && <LoginDialog visible={loginVisible} handleClose={() => setLoginVisible(false)} login={login} />}
    </div>
  );
};

export default AppTopbar;
