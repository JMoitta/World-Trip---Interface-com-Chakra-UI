import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { ReactNode } from "react";

import BuildingSvg from '../../public/assets/icons/building-1.svg'
import CocktailSvg from '../../public/assets/icons/cocktail-1.svg'
import EarthSvg from '../../public/assets/icons/earth-1.svg'
import MuseumSvg from '../../public/assets/icons/museum-1.svg'
import SurfSvg from '../../public/assets/icons/surf-1.svg'

interface IconContainer {
  children: ReactNode
}

function IconContainer({ children }: IconContainer) {
  return (
    <>
      <Box
        display={['block', 'none']}
        borderWidth={[4]}
        borderColor="highlight.100"
        borderRadius="50%"
      />
      <Box display={['none', 'block']}>
        {children}
      </Box>
    </>
  )
}

export function TravelTypes() {
  return (
    <Flex
      justifyContent={["space-around"]}
      gridGap={6}
      fontWeight={["medium", "bold"]}
      flexWrap={['wrap']}
      fontSize={["lg"]}
      alignContent="stretch"
    >
      <Flex
        flexDirection={["row", "column"]}
        gridGap={2}
        alignItems="center"
      >
        <IconContainer>
          <CocktailSvg />
        </IconContainer>
        <Text>
          vida noturna
        </Text>
      </Flex>
      <Flex
        flexDirection={["row", "column"]}
        gridGap={2}
        alignItems="center"
      >
        <IconContainer>
          <SurfSvg />
        </IconContainer>
        <Text>
          praia
        </Text>
      </Flex>
      <Flex
        flexDirection={["row", "column"]}
        gridGap={2}
        alignItems="center"
      >
        <IconContainer>
          <BuildingSvg />
        </IconContainer>
        <Text>
          moderno
        </Text>
      </Flex>
      <Flex
        flexDirection={["row", "column"]}
        gridGap={2}
        alignItems="center"
      >
        <IconContainer>
          <MuseumSvg />
        </IconContainer>
        <Text>
          clássico
        </Text>
      </Flex>
      <Flex
        flexDirection={["row", "column"]}
        gridGap={2}
        alignItems="center"
      >
        <IconContainer>
          <EarthSvg />
        </IconContainer>
        <Text>
          e mais...
        </Text>
      </Flex>
    </Flex>
  )
}
