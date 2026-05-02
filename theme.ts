// src/theme.ts
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      500: "#1565C0"
    }
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif"
  }
});
