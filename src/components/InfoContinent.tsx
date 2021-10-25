import { Box, Flex, Text } from "@chakra-ui/react";
import { Continent } from "../pages/continents/[continent]";


interface InfoContinentProps {
  continent: Continent;
}

export function InfoContinent({ continent }: InfoContinentProps) {
  return (
    <Flex
      flex={1}
      fontWeight="semibold"
      textAlign={["left", "center"]}
      marginBlockStart={[4, null]}
      justifyContent={["space-between", "space-around"]}
      alignItems="center"
      fontSize={["lg", "2xl"]}
    >
      <Box>
        <Text >
          <Text
            as="span"
            fontSize={["2xl", "5xl"]}
            color="highlight.100"
          >
            {continent.countries}
          </Text>
          <br />
          países
        </Text>
      </Box>
      <Box>
        <Text>
          <Text
            as="span"
            fontSize={["2xl", "5xl"]}
            color="highlight.100"
          >
            {continent.languages}
          </Text>
          <br />
          línguas
        </Text>
      </Box>
      <Box>
        <Text>
          <Text
            as="span"
            fontSize={["2xl", "5xl"]}
            color="highlight.100"
          >
            {continent.cities}
          </Text>
          <br />
          cidades + 100
        </Text>
      </Box>
    </Flex>
  )
}