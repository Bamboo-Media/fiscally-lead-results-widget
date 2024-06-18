import { selectAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const primary = definePartsStyle({
  field: {
    style: { padding: "0 10px" },
    width: "full",
    height: "45px",
    _placeholder: { fontSize: 14, color: "gray.600" },
    borderColor: "gray.400",
    borderWidth: 0.5,
    borderRadius: "10px",
  },
  icon: {
    fontSize: 22,
    color: "gray.900",
  },
});

export const Select = defineMultiStyleConfig({
  variants: { primary },
});
