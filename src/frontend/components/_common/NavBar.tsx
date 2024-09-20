import NextLink from "./NextLink";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter()
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
						onClick={() => {
							router.push({
								pathname: '/notes',
								query: {}
							})
						}}
					>
						{"Notes"}
					</Button>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
};

export default NavBar