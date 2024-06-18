import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const primary = definePartsStyle({
  field: {
    width: "full",
    height: "45px",
    borderColor: "#A7BCCF",
    borderWidth: 0.5,
    borderRadius: "10px",
    px: "10px",
    _placeholder: { fontSize: 14, color: "#8CA1B5" },
  },
});

export const Input = defineMultiStyleConfig({
  variants: { primary },
});
