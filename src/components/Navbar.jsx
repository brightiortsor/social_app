import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "5px",
  padding: "0 10px",
  width: "30%",
}));

const Icons = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          iBi.DEV
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
