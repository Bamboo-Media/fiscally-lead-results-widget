import { useEffect, useState } from "react";
import WithChakra from "./components/WithChakra";
import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Fonts } from "./config/fonts";
import FormRequestDetails from "./components/FormRequestDetails";
import Benefits from "./components/Benefits";
import { BadResult, DriveRiteResult } from "./components/Results";
import LoadingBox from "./components/Loading";
import ErrorBox from "./components/Error";

interface IQuote {
  avgEffectOnTakeOnPay: number;
  avgSavings: number;
  deposit: number;
  loanType: string;
  totalSavingsInTerm: number;
  adminFee: number;
  salary: number;
  workUsePercentage: number;
  payCycle: string;
  vehiclePrice: number;
  financialPayment: number;
  financialTerm: string;
  balloon: number;
  calculatorRequest: {
    vehiclePrice: number;
    otherFees: number;
    deposit: number;
    leaseTerm: number;
    monthlyPayment: number;
    startingDate: string;
    balloon: number;
    loanType: string;
    grossTaxableSalary: number;
    workUse: number;
    payCycle: string;
  };
}

interface ILeadInformation {
  full_name: string;
  email: string;
  phone: string;
}

export interface IResult {
  quote1: IQuote;
  quote2: IQuote;
  lead: ILeadInformation;
}

function App() {
  const params = new URL(document.location.toString()).searchParams;
  const searchParams = new URLSearchParams(params);
  const response_id = searchParams.get("response_id");

  const [result, setResult] = useState<IResult | null>(null);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    if (!response_id) return;

    (async () => {
      try {
        await fetch(
          `https://vvgtxmtfjgnsjsywzdxh.supabase.co/functions/v1/quote-result/${response_id}`
        )
          .then((res) => res.json())
          .then(setResult);
      } catch (error: unknown) {
        console.log(error);
        setError(error);
      }
    })();
  }, [response_id]);

  if (!response_id) {
    return null;
  }

  return (
    <WithChakra>
      {error ? (
        <ErrorBox />
      ) : result ? (
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          gap="32px"
          padding={{ base: 0, md: "48px" }}
          bg={{ base: "none", md: "gray.200" }}
          borderRadius={{ base: 0, md: "32px" }}
          gridTemplateColumns={{ base: "1fr", xl: "760px auto" }}
          position="relative"
          overflow="hidden"
        >
          <Center
            width="full"
            height="full"
            zIndex={100}
            position="absolute"
            display={{ base: "none", md: "flex" }}
          >
            <Box
              width="900px"
              height="900px"
              backgroundImage="./assets/logo-single.png"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
              opacity={0.05}
              borderRadius={999}
            />
          </Center>
          <VStack
            width="full"
            spacing="32px"
            alignItems="flex-start"
            justifyContent="flex-start"
            position="relative"
            zIndex={200}
          >
            <Heading
              as="h1"
              fontSize={26}
              fontWeight={700}
              fontFamily={Fonts.AvenirNextBold}
              color="black.400"
            >
              Hi {result.lead.full_name}, here&apos;s your{" "}
              <Text as="span" color="primary.400">
                DriveRite
              </Text>{" "}
              results based on
            </Heading>
            <FormRequestDetails
              salary={result.quote1.salary}
              finance_term={result.quote1.financialTerm}
              vehicle_price={result.quote1.vehiclePrice}
              work_use_percentage={result.quote1.workUsePercentage}
            />
            <VStack width="full" alignItems="flex-start" spacing="42px">
              <Benefits />
              <SimpleGrid width="full" columns={{ base: 1, md: 2 }} gap="24px">
                <DriveRiteResult result={result} />
                <BadResult result={result} />
              </SimpleGrid>
            </VStack>
          </VStack>
        </SimpleGrid>
      ) : (
        <LoadingBox />
      )}
    </WithChakra>
  );
}

export default App;
