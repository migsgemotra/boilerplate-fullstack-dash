import type { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../themes/theme";
import NavBar from "../components/_common/NavBar";
import Footer from "../components/_common/Footer";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
	return (
		<AppCacheProvider {...props}>
			<ThemeProvider theme={theme}>
        <NavBar />
				<CssBaseline />
				<Component {...pageProps} />
        <Footer />
			</ThemeProvider>
		</AppCacheProvider>
	);
}
