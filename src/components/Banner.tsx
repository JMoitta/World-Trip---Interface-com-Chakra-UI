import {
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";
import React from "react";

interface BannerProps {
  title: string;
  subtitle: string;
}

export function Banner({ title, subtitle }: BannerProps) {
  return (
    <Flex
      color="light.text"
      bgImage="url('/assets/background.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      maxH="335px">
      <Container
        maxW="container.xl"
      >
        <Flex
          as="header"
          w="100%"
          paddingTop={[7, 20]}
          paddingBottom={[7, 20]}
          position="relative"
          justifyContent="space-between"
        >
          <VStack align="flex-start" maxW="31rem" spacing="5">
            <Heading as="h1" fontSize={["2xl", "4xl"]} fontWeight="medium" >
              {title}
            </Heading>
            <Text fontSize={["sm", 'md']}>
              {subtitle}
            </Text>
          </VStack>
          <Image display={['none', 'block']} src="/assets/Airplane.png" maxW={["0", "50%", "90%"]} transform="rotate(3deg)" />
        </Flex>
      </Container>
    </Flex>
  )
}