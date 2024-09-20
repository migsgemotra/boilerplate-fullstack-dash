import {
	Container,
	Typography,
	Box
} from "@mui/material";
import Image from "next/image";

import pata from '../public/static/pata.png'

export default function Home() {
  return (
		<>
			<Container
				maxWidth={"lg"}
				sx={{ paddingTop: "8rem", paddingBottom: "8rem" }}
			>
        <Box
          component={Image}
          height={"200px"}
          width={"auto"}
          alt={""}
          src={pata}
        />
        <Typography variant={"h1"} color={"primary"} fontWeight={"bold"}>
          {'Hello world'}
        </Typography>
			</Container>
		</>
	);
}
