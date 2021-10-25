import { Box, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";

export interface City {
  name: string;
  country: string;
  countryCode: string;
  url: string;
}

interface CitiesProps {
  cities: City[]
}

export function Cities({ cities }: CitiesProps) {
  function flagsImagemUrl(countryCode: string): string {
    return `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/${countryCode}.svg`
  }

  return (
    <Box marginBlockStart={[9, null]}>
      <Heading fontSize={["2xl", "4xl"]} fontWeight="medium">
        Cidades + 100
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        rowGap={[5, 12]}
        // spacing={[5, 12]}
        marginBlockStart={[5, 10]}
        marginBlockEnd={[5, 9]}
      >
        {cities.map((city, index) => (
          <Box
            marginInline="auto"
            key={index}
            w={[64]}
            borderColor="highlight.50"
            borderWidth="1px"
            borderRadius="base"
          >
            <Image h="175px" src={city.url} />
            <Flex
              justifyContent="space-between"
              padding={{ base: 8 }}
              paddingBlockStart="5"
              paddingBlockEnd="6"
              gridGap="3"
              alignItems="center"
            >
              <VStack
                fontFamily="Barlow"
                spacing="3"
                alignItems="flex-start"
              >
                <Heading as="h3" fontWeight="semibold" fontFamily="Barlow" fontSize="xl">
                  {city.name}
                </Heading>
                <Text color="dark-info" fontWeight="medium" fontSize="md">
                  {city.country}
                </Text>
              </VStack>
              <Box>
                <Box w="30px" h="30px"
                  bgImage={flagsImagemUrl(city.countryCode.toLowerCase())}
                  color="light.text"
                  bgPos="center"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  borderRadius="full">

                </Box>
              </Box>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}