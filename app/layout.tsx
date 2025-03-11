import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
  createTheme,
} from "@mantine/core";

const appTheme = createTheme({
  primaryColor: 'blue',
  defaultRadius: 'md',
});

export const metadata = {
  title: "Modern Agency Theme",
  description: "A modern agency theme built with Next.js and Mantine UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={appTheme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
