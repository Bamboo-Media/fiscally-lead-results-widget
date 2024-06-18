import { sliderAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const primary = definePartsStyle({
  thumb: defineStyle({
    bg: "primary.400",
    width: "24px",
    height: "24px",
    rounded: "full",
    _disabled: {
      bg: "primary.400",
      opacity: 0.4,
    },
  }),
  filledTrack: {
    bg: "#2B45A1",
    rounded: "full",
    height: "8px",
    _disabled: {
      bg: "primary.400",
      opacity: 0.2,
    },
  },
  track: {
    bg: "#E8E8E8",
    height: "8px",
    _disabled: {
      opacity: 0.2,
    },
  },
});

export const Slider = defineMultiStyleConfig({
  variants: { primary },
});
