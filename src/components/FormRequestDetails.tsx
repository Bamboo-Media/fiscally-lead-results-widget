import { Text, VStack } from "@chakra-ui/react";
import { Fonts } from "../config/fonts";
import { FC } from "react";
import formatNumber from "../utils/format-number";

type Props = {
  finance_term: string;
  salary: number;
  vehicle_price: number;
  work_use_percentage: number;
};

const FormRequestDetails: FC<Props> = ({
  finance_term,
  salary,
  vehicle_price,
  work_use_percentage,
}) => {
  return (
    <VStack spacing="16px" alignItems="flex-start">
      <Text
        fontSize={16}
        fontWeight={400}
        fontFamily={Fonts.AvenirNextLight}
        color="gray.800"
      >
        Vehicle Price:{" "}
        <Text
          as="span"
          fontWeight={700}
          fontFamily={Fonts.AvenirNextBold}
          color="primary.400"
        >
          ${formatNumber(vehicle_price)}
        </Text>
      </Text>
      <Text
        fontSize={16}
        fontWeight={400}
        fontFamily={Fonts.AvenirNextLight}
        color="gray.800"
      >
        Gross Annual Salary:{" "}
        <Text
          as="span"
          fontWeight={700}
          fontFamily={Fonts.AvenirNextBold}
          color="primary.400"
        >
          ${formatNumber(salary)}
        </Text>
      </Text>
      <Text
        fontSize={16}
        fontWeight={400}
        fontFamily={Fonts.AvenirNextLight}
        color="gray.800"
      >
        Finance Term:{" "}
        <Text
          as="span"
          fontWeight={700}
          fontFamily={Fonts.AvenirNextBold}
          color="primary.400"
        >
          {finance_term}
        </Text>
      </Text>
      <Text
        fontSize={16}
        fontWeight={400}
        fontFamily={Fonts.AvenirNextLight}
        color="gray.800"
      >
        Work Use Percentage:{" "}
        <Text
          as="span"
          fontWeight={700}
          fontFamily={Fonts.AvenirNextBold}
          color="primary.400"
        >
          {work_use_percentage}%
        </Text>
      </Text>
    </VStack>
  );
};

export default FormRequestDetails;
