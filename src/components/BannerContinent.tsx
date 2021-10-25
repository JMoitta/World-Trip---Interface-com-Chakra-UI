import { Box, Container, Heading } from "@chakra-ui/react";
import { Continent } from "../pages/continents/[continent]";

interface BannerContinentProps {
  continent: Continent;
}
export function BannerContinent({ continent }: BannerContinentProps) {
  return (
    <Box
      as="header"
      h={{ base: "150px", md: "250px", lg: "500px" }}// ["150px", "500px"]
      bgImage={continent.url}
      color="light.text"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Container
        display="flex"
        h="100%"
        maxW="container.xl"
        flexDir="column"
        justifyContent={{ base: "center", lg: "flex-end" }}
        paddingBlockEnd={{ base: "unset", lg: "14" }} // [null, "14"]
      >
        <Heading
          as="h1"
          textAlign={{ base: "center", lg: "left" }}// ["center", "left"]
          fontWeight="semibold"
          fontSize={{ base: "3xl", md: "4xl" }} // 
        >
          {continent.name}
        </Heading>
      </Container>
    </Box>
  )
}