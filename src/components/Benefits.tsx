import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { Fonts } from "../config/fonts";
import { MdCheck } from "react-icons/md";

const Benefits = () => {
  return (
    <VStack
      padding="24px"
      borderRadius="16px"
      bg="white"
      boxShadow="sm"
      spacing="12px"
      alignItems="flex-start"
      borderWidth={1}
      borderColor="green.100"
      height="fit-content"
    >
      <HStack spacing="8px">
        <Icon as={MdCheck} color="green.500" boxSize="24px" />
        <Text
          fontFamily={Fonts.AvenirNextBold}
          fontSize="18px"
          color="gray.900"
        >
          No Employer Sign-off Required
        </Text>
      </HStack>
      <HStack spacing="8px">
        <Icon as={MdCheck} color="green.500" boxSize="24px" />
        <Text
          fontFamily={Fonts.AvenirNextBold}
          fontSize="18px"
          color="gray.900"
        >
          No Salary Sacrifice Required
        </Text>
      </HStack>
    </VStack>
  );
};

export default Benefits;
