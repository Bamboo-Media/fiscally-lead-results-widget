import { Button, Center, Heading, Icon, Text } from "@chakra-ui/react";
import { Fonts } from "../config/fonts";
import { MdError } from "react-icons/md";

const ErrorBox = () => {
  return (
    <Center
      flexDirection="column"
      width="full"
      minHeight="480px"
      padding={{ base: 0, md: "68px" }}
      bg="gray.200"
      borderRadius="32px"
      gap="24px"
      borderWidth={1}
      borderColor="red.100"
    >
      <Icon as={MdError} boxSize="64px" color="red.500" />
      <Heading
        fontSize={{ base: 18, md: 22 }}
        textAlign="center"
        fontWeight={500}
        fontFamily={Fonts.AvenirNextMedium}
        color="gray.900"
        css={{ textWrap: "balance" }}
      >
        An error occurred while processing the results, try again, if the error
        persists contact our support via email at{" "}
        <Text as="span" fontWeight={700} fontFamily={Fonts.AvenirNextBold}>
          support@fiscally.com.au
        </Text>
      </Heading>
      <a href="/">
        <Button
          size="md"
          variant="secondary"
          width="fit-content"
          lineHeight={0}
          borderRadius="8px"
        >
          Back to Home
        </Button>
      </a>
    </Center>
  );
};

export default ErrorBox;
