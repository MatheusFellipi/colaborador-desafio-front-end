import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          "*": {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
          },
          html: {
            "@media (max-width: 1080px)": {
              fontSize: "93.75%" /*15px*/,
            },
            "@media (max-width: 720px)": {
              fontSize: "87.5%" /*14px*/,
            },
          },
          "body, input, textarea, button": {
            fontFamily: "Poppins,sans-serif",
            fontWeight: "400",
          },
          body: {
            background: "#E5E5E5",
          },
          ["disabled"]: {
            opacity: "0.6",
            cursor: "not-allowed",
          },
          "button, a": {
            cursor: "pointer",
          },
          "h1, h2, h3, h4, h5, h6, strong": {
            fontWeight: "600",
          },
          ".title": {
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "150%",
            color: "#34423D",
          },
          ".description": {
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "120%",
            color: "#587169",
          },
          a: {
            textDecoration: "none",
          },
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
