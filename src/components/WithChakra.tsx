import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const WithChakra: FC<Props> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default WithChakra;
