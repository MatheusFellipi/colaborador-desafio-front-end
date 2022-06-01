import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends LibTheme {
    colors: {
      background: string;
      white: string;
      black: string;
      teal: {
        "100": string;
      };
      gray: {
        "100": string;
        "200": string;
        "600": string;
      };
      "gray-green": {
        "100": string;
      };
      green: {
        "100": string;
      };
    };
  }
}
