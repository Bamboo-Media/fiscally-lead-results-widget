import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { Fonts } from "../../config/fonts";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const primary = definePartsStyle({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: { base: "12px", md: "32px" },
  },
  container: {
    borderRadius: "16px",
    bg: "white",
    border: "none",

    _hover: {
      bg: "#FAFAFA",
    },
  },
  button: {
    borderRadius: "16px",
    px: { base: "16px", md: "40px" },
    py: { base: "12px", md: "32px" },
    color: "black.400",
    fontWeight: 700,
    fontSize: { base: 18, md: 24 },
    lineHeight: { base: "24px", md: "32px" },
    fontFamily: Fonts.AvenirNextBold,
    display: "flex",
    justifyContent: "space-between",

    _hover: {
      bg: "unset",
    },

    _expanded: {
      bg: "#FAFAFA",
    },
  },
  panel: {
    padding: { base: "0 16px 12px 48px", md: "0 40px 32px 40px" },
    fontSize: { base: 16, md: 20 },
    fontWeight: 500,
    lineHeight: { base: "24px", md: "28px" },
    fontFamily: Fonts.AvenirNextMedium,
    color: "rgba(20, 20, 20, 0.70)",
  },
  icon: {
    color: "black.400",
    borderColor: "#D0D0D0",
    borderWidth: 1,
    fontSize: 24,
    rounded: "full",
    bg: "white",
    width: { base: "36px", md: "40px" },
    height: { base: "36px", md: "40px" },
    padding: { base: "6px", md: "8px" },
  },
});

export const Accordion = defineMultiStyleConfig({
  variants: { primary },
});
