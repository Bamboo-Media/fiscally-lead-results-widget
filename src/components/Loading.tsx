import { Heading, Text, VStack } from "@chakra-ui/react";
import { Fonts } from "../config/fonts";
import Lottie from "lottie-react";
import * as processingFormAnimationData from "../animations/processing-form.json";

const LoadingBox = () => {
  return (
    <VStack
      width="full"
      minHeight="420px"
      alignItems="center"
      justifyContent="center"
      bg="gray.200"
      borderRadius="32px"
      spacing="34px"
      padding="44px"
    >
      <Heading
        fontSize={{ base: 24, md: 28 }}
        fontWeight={600}
        fontFamily={Fonts.AvenirNextDemi}
        color="black.400"
        textAlign="center"
      >
        We are preparing your{" "}
        <Text
          color="primary.400"
          fontWeight={700}
          fontFamily={Fonts.AvenirNextBold}
          as="span"
        >
          DriveRite
        </Text>{" "}
        results...
      </Heading>
      <Lottie
        animationData={processingFormAnimationData}
        loop={true}
        autoPlay
        style={{ width: "180px", height: "180px" }}
      />
    </VStack>
  );
};

export default LoadingBox;
