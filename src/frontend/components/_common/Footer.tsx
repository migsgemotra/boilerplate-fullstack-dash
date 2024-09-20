import { Container, Box, Typography, Stack } from "@mui/material";

import NextLink from "./NextLink";

const Footer = () => {
	return (
		<Container
			maxWidth={false}
			sx={{
				background: "#3d5e53",
				paddingTop: "2rem",
				paddingBottom: "2rem",
				color: "white",
			}}
		>
			<Stack spacing={8} direction="row">
				<Typography sx={{ color: "white" }}>
					1
					<br />
					2
					<br />
					3
					<br />
					4
					<br />
					<Box
						component={NextLink}
						to="tel:"
						sx={{ color: "white" }}
					>
						5
					</Box>
				</Typography>
				<Typography sx={{ color: "white" }}>
					6
					<br />
					7
					<br />
					8
					<br />
					9
					<br />
					<Box
						component={NextLink}
						to="tel:+1"
						sx={{ color: "white" }}
					>
						+1
					</Box>
				</Typography>
			</Stack>
			<br />
			<Typography gutterBottom>
				<Box
					component={NextLink}
					to="mailto:gemotra.migs@gmail.com"
					sx={{ color: "white" }}
				>
					gemotra.migs@gmail.com
				</Box>
			</Typography>
			<br />
			<p>Hello world</p>
			<p>© Copyright 2024</p>
		</Container>
	);
};

export default Footer;