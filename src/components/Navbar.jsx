import { Pets } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          iBi.DEV
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
