import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const primary = definePartsStyle({
  dialog: {
    maxWidth: "unset",
    borderRadius: "24px",
    bg: "white",
    px: "48px",
    py: "24px",
    position: "relative",
  },
  closeButton: {
    width: "20px",
    height: "20px",
    rounded: "full",
    bg: "#404040",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 100,
    top: "10px",
    right: "12.71px",
  },
  overlay: {
    bg: "rgba(0,0,0,0.7)",
  },
});

export const Modal = defineMultiStyleConfig({
  variants: { primary },
});
