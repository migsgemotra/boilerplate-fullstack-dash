import NextLink from "./NextLink";
import { AppBar, Toolbar, Box, Button } from "@mui/material";

const NavBar = () => {
	return (
		<>
			<AppBar
				position={"fixed"}
				color={"default"}
				sx={{ border: "none", backgroundColor: "#3d5e53" }}
			>
				<Toolbar>
					<NextLink to={"/"}>
					</NextLink>
					<Box style={{ flex: 1 }} />
					<Button
						component={NextLink}
						to={""}
						variant={"contained"}
						color={"inherit"}
						sx={{ mr: 1 }}
					>
						{"Sign In"}
					</Button>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
};

export default NavBar