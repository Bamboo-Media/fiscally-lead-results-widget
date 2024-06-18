import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const primary = definePartsStyle({
  container: {
    padding: "2px",
  },
  thumb: {
    width: "16px",
    height: "16px",
    bg: "white",
  },
  track: {
    bg: "#E8E8E8",
    _checked: {
      bg: "primary.400",
    },
  },
});

export const Switch = defineMultiStyleConfig({ variants: { primary } });
