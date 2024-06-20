import {
  Divider,
  List,
  ListItem,
  Text,
  StackProps,
  VStack,
  Heading,
  HeadingProps,
} from "@chakra-ui/react";
import { Fonts } from "../config/fonts";
import { FC } from "react";
import formatNumber from "../utils/format-number";
import { IResult } from "../App";

type Props = {
  result: IResult;
};

export const BadResult: FC<Props> = ({ result }) => {
  return (
    <Card borderColor="red.200" bg="red.50">
      <Title color="red.400">7% Car Loan</Title>
      <Divider
        orientation="horizontal"
        borderWidth={1}
        borderColor="rgba(0,0,0,0.1)"
      />
      <List spacing="12px" width="full">
        <ListItem>
          <Text color="gray.900" fontFamily={Fonts.AvenirNextMedium}>
            Finance Payment per Week:{" "}
            <Text as="span" color="red.400" fontFamily={Fonts.AvenirNextBold}>
              {result &&
                formatNumber((result?.quote2.financialPayment * 12) / 52)}
            </Text>
          </Text>
        </ListItem>
        <ListItem>
          <Text color="gray.900" fontFamily={Fonts.AvenirNextMedium}>
            Balloon:{" "}
            <Text as="span" color="red.400" fontFamily={Fonts.AvenirNextBold}>
              {result && formatNumber(result?.quote2.calculatorRequest.balloon)}
            </Text>
          </Text>
        </ListItem>
        <ListItem>
          <Text color="gray.900" fontFamily={Fonts.AvenirNextMedium}>
            Finance Term:{" "}
            <Text as="span" color="red.400" fontFamily={Fonts.AvenirNextBold}>
              {result?.quote2.financialTerm}
            </Text>
          </Text>
        </ListItem>
      </List>
    </Card>
  );
};

export const DriveRiteResult: FC<Props> = ({ result }) => {
  return (
    <Card borderColor="primary.200" bg="primary.100">
      <Title color="primary.400">DriveRite</Title>
      <Divider
        orientation="horizontal"
        borderWidth={1}
        borderColor="rgba(0,0,0,0.1)"
      />
      <List spacing="12px" width="full">
        <ListItem>
          <Text color="gray.900" fontFamily={Fonts.AvenirNextMedium}>
            Effect on take home pay (Weekly):{" "}
            <Text as="span" color="green.500" fontFamily={Fonts.AvenirNextBold}>
              {result && formatNumber(result?.quote1.avgEffectOnTakeOnPay)}
            </Text>
          </Text>
        </ListItem>
        <ListItem>
          <Text color="gray.900" fontFamily={Fonts.AvenirNextMedium}>
            Balloon:{" "}
            <Text as="span" color="green.500" fontFamily={Fonts.AvenirNextBold}>
              {result && formatNumber(result?.quote1.calculatorRequest.balloon)}
            </Text>
          </Text>
        </ListItem>
        <ListItem>
          <Text color="gray.900" fontFamily={Fonts.AvenirNextMedium}>
            Finance Term:{" "}
            <Text as="span" color="green.500" fontFamily={Fonts.AvenirNextBold}>
              {result?.quote1.financialTerm}
            </Text>
          </Text>
        </ListItem>
      </List>
    </Card>
  );
};

const Card = (props: StackProps) => {
  return (
    <VStack
      alignItems="flex-start"
      borderRadius="16px"
      padding="24px"
      spacing="24px"
      bg="white"
      borderWidth={1}
      {...props}
    >
      {props.children}
    </VStack>
  );
};

const Title = (props: HeadingProps) => {
  return (
    <Heading
      fontFamily={Fonts.AvenirNextBold}
      fontWeight={700}
      fontSize={{ base: 24, md: 28 }}
      {...props}
    >
      {props.children}
    </Heading>
  );
};
