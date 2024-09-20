import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps,
} from '@mui/material-nextjs/v14-pagesRouter';
import { Html, Head, Main, NextScript, DocumentContext, DocumentProps } from "next/document";

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
	return (
		<Html lang="en">
			<Head>
				<title>{"Monorepo Boilerplate"}</title>
				<meta property={"og:title"} content={"Monorepo Boilerplate"} />
				<meta property={"og:url"} content={"https://"} />
				<meta
					property={"og:image"}
					content={""}
				/>
				<link
					rel={"shortcut icon"}
					type={"image/x-icon"}
					href={""}
				/>
				<link
					href={""}
					rel={"apple-touch-icon"}
				/>
				<meta name="theme-color" content={"#1665FF"} />
				<meta name="emotion-insertion-point" content="" />
				<DocumentHeadTags {...props} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
