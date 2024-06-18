import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { Fonts } from "../../config/fonts";

const primary = defineStyle({
  bg: "primary.400",
  color: "white",
  fontFamily: Fonts.AvenirNextBold,
  fontWeight: 700,
  gap: "8px",
  borderRadius: "32px",
  borderWidth: "4px",
  borderColor: "transparent",
  py: { base: "12px", md: "16px" },
  px: { base: "18px", md: "24px" },

  _focus: {
    borderWidth: "4px",
    borderColor: "rgba(59, 102, 255, 0.40)",
    opacity: 1,
    bg: "primary.400",
  },

  _hover: {
    opacity: 1,
    bg: "#6284FF",
  },

  _disabled: {
    opacity: 1,
    bg: "rgba(59, 102, 255, 0.40)",
  },
});

const secondary = defineStyle({
  bg: "white",
  color: "black.400",
  fontFamily: Fonts.AvenirNextBold,
  fontWeight: 700,
  gap: { base: "6px", md: "8px" },
  borderRadius: "32px",
  borderWidth: "1px",
  borderColor: "#E8E8E8",
  py: { base: "12px", md: "16px" },
  px: { base: "18px", md: "24px" },

  _focus: {
    borderWidth: "4px",
    borderColor: "rgba(59, 102, 255, 0.40)",
    opacity: 1,
    bg: "#FAFAFA",
  },

  _hover: {
    opacity: 1,
    bg: "#FAFAFA",
  },

  _disabled: {
    opacity: 0.5,
    bg: "#FAFAFA",
  },
});

const lg = defineStyle({
  minHeight: "60px",
});

const md = defineStyle({
  minHeight: "48px",
});

const iconPrimary = defineStyle({
  rounded: "full",
  bg: "primary.400",
  color: "white",
  borderWidth: "4px",
  borderColor: "transparent",

  _hover: {
    bg: "#6284FF",
  },

  _focus: {
    borderColor: "rgba(80, 59, 255, 0.40",
    bg: "#3356D0",
  },

  _disabled: {
    bg: "rgba(59, 102, 255, 0.40)",
  },
});

const iconSecondary = defineStyle({
  rounded: "full",
  bg: "white",
  color: "black.400",
  borderWidth: "1px",
  borderColor: "#E8E8E8",

  _hover: {
    bg: "#FAFAFA",
  },

  _focus: {
    borderWidth: "4px",
    borderColor: "rgba(59, 102, 255, 0.40)",
    bg: "#FAFAFA",
  },

  _disabled: {
    bg: "#FAFAFA",
    opacity: 0.5,
  },
});

const iconLg = defineStyle({
  minWidth: "56px",
  height: "56px",
  padding: "16px",
});

const iconMd = defineStyle({
  minWidth: "40px",
  height: "40px",
  padding: "8px",
});

export const Button = defineStyleConfig({
  variants: {
    primary,
    secondary,
    iconPrimary,
    iconSecondary,
  },
  sizes: { lg, md, iconMd, iconLg },
});
