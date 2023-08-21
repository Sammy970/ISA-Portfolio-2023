// chakra-theme.js (or chakra-theme.ts)

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Progress: {
      variants: {
        green: {
          filledTrack: {
            bg: "#04C27F",
          },
        },
        yellow: {
          filledTrack: {
            bg: "#F1D06E",
          },
        },
        blue: {
          filledTrack: {
            bg: "#5758F1",
          },
        },
        pink: {
          filledTrack: {
            bg: "#FF3D9A",
          },
        },
      },
    },
  },
});

export default theme;
