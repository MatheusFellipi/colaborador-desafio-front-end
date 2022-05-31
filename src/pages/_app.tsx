import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          html: {
            "@media (max-width: 1080px)": {
              "font-size": "93.75%" /*15px*/,
            },
            "@media (max-width: 720px)": {
              "font-size": "87.5%" /*14px*/,
            },
          },
          "body, input, textarea, button": {
            "font-family": '"Poppins",sans-serif',
            "font-weight": "400",
          },
          ["disabled"]: {
            opacity: "0.6",
            cursor: "not-allowed",
          },
          button: {
            cursor: "pointer",
          },
          "h1, h2, h3, h4, h5, h6, strong": {
            "font-weight": "600",
          },
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
